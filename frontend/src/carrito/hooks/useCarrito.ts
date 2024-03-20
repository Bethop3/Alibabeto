/* eslint-disable @typescript-eslint/no-explicit-any */
import { CarritoResponse, ProductoCarrito } from '../types/carrito.type'
import { useElements, useStripe } from '@stripe/react-stripe-js'
import { Producto } from '../../productos/types/productos.types'
import { AuthAxios } from '../../global/api/AuthAxios'
import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { BasicResponse } from '../../types'
import { useStore } from '../../store'
import Decimal from 'decimal.js'
import { useMemo } from 'react'
import Swal from 'sweetalert2'

const stripePromise = loadStripe('pk_test_51OwOXeBLBF0dttMQtVfyklMPuP2gFw1xddFySA3DElUfeFUJJ3Miw81vPIfK9NJBP473EViZHhVcWcY4aRVW4Utx00qRnyPmOP');

const useCarrito = () => {
  
  const elements = useElements();
  const stripe = useStripe();
  
    const { setClientSecretStripe } = useStore()

    const [ productosRelacionados , setProductosRelacionados ] = useState<Producto[]>([])
    const [ carrito , setCarrito ] = useState<ProductoCarrito[]>([])
    const [ isLoading , setIsLoading ] = useState(false)
    const [ clientSecret , setClientSecret ] = useState<any>('')

    useEffect( () => {

      getProductosCarrito()

    } , [])

    const { importe , iva , total } = useMemo( () => {
      let importe = new Decimal(0);
      let iva = new Decimal(0);
      let total = new Decimal(0);

    for (const articulo of carrito) {
      const _importe = new Decimal(articulo.importe);
      const _total = new Decimal(articulo.total);
      const _iva = new Decimal(articulo.iva);
    
      // Suma los importes
      importe = importe.plus(_importe);
    
      // Suma los totales
      total = total.plus(_total);
    
      // Suma los valores de IVA
      iva = iva.plus(_iva);
    }

      return {
        importe,
        iva,
        total
      }

    }, [carrito])

    const getProductosCarrito = async () => {

      try {
        
        const { data : { data } } = await AuthAxios.get<BasicResponse<CarritoResponse>>('/carrito')

        console.log(data)

        setProductosRelacionados(data.productosRelacionados)

        setCarrito(data.carrito)
        
      } catch (error) {
        throw new Error("Error")
      }

    }

    const handleDeleteArticulo = async ( id: number ) => {

      try {
        
        setIsLoading(true)
        
        await AuthAxios.delete<BasicResponse<ProductoCarrito[]>>(`/carrito/${id}`)
        
        setIsLoading(false)

        getProductosCarrito()

        await Swal.fire({
          title: 'Articulo eliminado correctamente',
          icon:"success"
        })
        
      } catch (error) {
        
        await Swal.fire({
          title: 'Error del servidor al eliminar el articulo',
          icon:"error"
        })

      }

    }

    const handleSubmitCarrito = async () => {

      try {

        if( isLoading ) return
        
        if (elements == null || stripe == null) {
          
          await Swal.fire({
            title: 'No se cargo stripe correctamente',
            icon:"success"
          })

          return;

        }

        const { error: submitError } = await elements.submit();

        if (submitError?.message) {
          
          // await Swal.fire({
          //   title: submitError?.message,
          //   icon:"error",
          // })

          return;
        }    

        setIsLoading(true)
        
        const { data : { data:{ secret_key } } } = await AuthAxios.post<BasicResponse<{ secret_key: string }>>('/pedido/payment_intent', {
          total: total.toDP(2).toNumber(),
        })

        setClientSecretStripe(secret_key)

        setClientSecret(secret_key)

        if( !secret_key ) return

        const { paymentIntent , error:paymentError } = await stripe.confirmPayment({
          elements,
          clientSecret: secret_key,
          redirect: 'if_required',
          confirmParams: {
            return_url: `${window.location.origin}/completion`,
          },
        });
        
        if( paymentError )
        {
          
          await Swal.fire({
            title: paymentError.message ?? 'Error al hacer el pago',
            icon: "warning",
          })

          return

        }

        const productos = carrito.map( articulo => ({
          cantidad: articulo.cantidad,
          importe: articulo.importe,
          iva: articulo.iva,
          total: articulo.total,
          productoID: articulo.producto.id,
        }))

        const { data:pedidoCreado } = await AuthAxios.post<BasicResponse<any>>('/pedido/create', {
          direccionEntregaID: 1,
          fechaPedido: new Date(),
          importe: importe.toDP(2).toNumber(),
          total: total.toDP(2).toNumber(),
          iva: iva.toDP(2).toNumber(),
          payment_id: paymentIntent.id,
          productos: productos
        })
        
        // console.log(data)
        
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsLoading(false)

        if( pedidoCreado.ok )
        {
          
          await Swal.fire({
            title: "Pedido creado completamente",
            icon: "success" ,
          })

          return 

        }

        await Swal.fire({
          title: "Error al completar el pedido",
          icon: "warning",
        })

      } catch (error) {
        
        setIsLoading(false)
        
        console.error(error);
        
      }

    }

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
    
    
    return {
      isLoading,
      stripePromise,
      clientSecret,
      conceptos: carrito,
      productosRelacionados,
      iva: formatter.format(iva.toNumber()),
      total: formatter.format(total.toNumber()),
      importe: formatter.format(importe.toNumber()),
      handleSubmitCarrito,
      handleDeleteArticulo,
    }
}

export default useCarrito