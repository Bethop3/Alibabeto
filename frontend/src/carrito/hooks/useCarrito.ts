// import type { AgregarCarrito, ProdutoCarito } from '../types/carrito.type'

// import type { BasicResponse } from '../types/API'
// import { AgregarCarrito, ProdutoCarito } from '../types/carrito.type'
import { AuthAxios } from '../../global/api/AuthAxios'
import { CarritoResponse, ProductoCarrito } from '../types/carrito.type'
import { useEffect, useState } from 'react'
import { BasicResponse } from '../../types'
import Decimal from 'decimal.js'
import { useMemo } from 'react'
import Swal from 'sweetalert2'
import { Producto } from '../../productos/types/productos.types'

const useCarrito = () => {
  
    // const handleAddProducto
    const [ productosRelacionados , setProductosRelacionados ] = useState<Producto[]>([])
    const [ carrito , setCarrito ] = useState<ProductoCarrito[]>([])
    const [ isLoading , setIsLoading ] = useState(false)

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

    // const handleAddProducto = async ( producto : AgregarCarrito ) => {

    //   AuthAxios.post('/carrito/add' , {

    //   })

    // }

    const handleSubmitCarrito = async () => {

      try {

        setIsLoading(true)
        
        // body('direccionEntregaID').isInt().withMessage('El campo direccionEntregaID debe ser un número entero.'),
        // body('fechaPedido').isISO8601().toDate().withMessage('El campo fechaPedido debe ser una fecha en formato ISO 8601.'),
        // body('importe').isFloat().withMessage('El campo importe debe ser un número de punto flotante.'),
        // body('iva').isFloat().withMessage('El campo iva debe ser un número de punto flotante.'),
        // body('total').isFloat().withMessage('El campo total debe ser un número de punto flotante.'),
        // body('productos').isArray({ min: 1 }).withMessage('El campo productos no puede estar vacío y debe ser un array.')

        const { data : { data } } = await AuthAxios.post('/pedido/create', {
          direccionEntregaID: 1,
          fechaPedido: new Date(),
          importe: 150,
          iva: 25,
          total: 1,
          productos: [
            {
              cantidad: 1,
              importe: 1,
              iva: 1,
              total: 1,
              productoID: 36,
            }
          ]
        })
        
        console.log(data)
        
        // setCarrito(data)
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsLoading(false)

        await Swal.fire({
          title: 'Pedido creado correctamente',
          icon: 'success'
        })

      } catch (error) {
        setIsLoading(false)
        throw new Error("Error")
      }

    }

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
    
    
    return {
      isLoading,
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