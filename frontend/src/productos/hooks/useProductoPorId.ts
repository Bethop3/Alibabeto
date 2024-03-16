/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom"
import { Producto, ProductoPorIdResponse } from "../types/productos.types"
import { AuthAxios } from "../../global/api/AuthAxios"
import { useEffect, useMemo, useState } from "react"
import { formatter } from "../utils/formatter"
import { BasicResponse } from "../../types"
import { useStore } from "../../store"
import { toast } from 'react-toastify'
import Decimal from 'decimal.js'

export type ContextUseProductoPorId = ReturnType<typeof useProductoPorId>;

const useProductoPorId = () => {

  const { auth } = useStore()
  const navigate = useNavigate();

  const [productosRelacionados, setProductosRelacionados] = useState<Producto[]>([])
  const [producto, setProducto] = useState<Producto | null>(null)
  const [isLoadingCarrito, setLoadingCarrito] = useState(false)
  const [maxCantidad, setMaxCantidad] = useState(0)
  const [isLoading, setLoading] = useState(false)

  const { id: id_producto } = useParams()

  useEffect(() => {

    handleGetProductoPorId()

  }, [])

  const handleGetProductoPorId = async () => {

    try {

      setLoading(true)

      const { data: { data } } = await AuthAxios.get<BasicResponse<ProductoPorIdResponse>>(`/producto/findone/${id_producto}`);

      setProducto(data.producto)

      setProductosRelacionados(data.productosRelacionados)

      await new Promise(resolve => setTimeout(resolve, 2000));

      setMaxCantidad(producto?.existencias!)

      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log();
    }

  }
  const [cantidadProducto, setCantidadProducto] = useState(1)

  const { importe, iva, total } = useMemo(() => {

    const _cantidad = new Decimal(cantidadProducto)
    const _precio = new Decimal(producto?.precio! ?? 0)

    const _importe = _precio.times(_cantidad)

    const iva = _precio.times(0.16)

    const _total = _importe.plus(iva)

    return {
      importe: _importe,
      iva,
      total: _total
    }

  }, [cantidadProducto, producto])

  const handleIncrementCantidad = () => {

    if (cantidadProducto < 1 || cantidadProducto >= maxCantidad) return

    setCantidadProducto(cantidadProducto + 1)

  }

  const handleDecrementCantidad = () => {

    if (cantidadProducto <= 1 || cantidadProducto >= maxCantidad) return

    setCantidadProducto(cantidadProducto - 1)

  }

  const handleAddProductoCarrito = async () => {

    try {

      if (isLoading || isLoadingCarrito) return

      // debugger
      if( auth === null )
      {
        navigate('/login')
        return
      }
      // cantidad: number;
      // importe: number;
      // iva: number;
      // total: number;
      // productoID: number;

      setLoadingCarrito(true)

      await AuthAxios.post("/carrito/add/producto", {
        cantidad: cantidadProducto,
        importe: importe.toNumber(),
        total: total.toNumber(),
        iva: iva.toNumber(),
        productoID: id_producto
      })

      // setTotalCarrito( totalCarrito + 1 )        

      await new Promise(resolve => setTimeout(resolve, 2000));

      setLoadingCarrito(false)

      toast.success('¡Articulo agregado al carrito!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } catch (error) {
      setLoadingCarrito(false)
      console.log();
    }

  }

  return {
    isLoading,
    producto,
    isLoadingCarrito,
    productosRelacionados,
    importe: formatter.format(importe.toNumber()),
    iva: formatter.format(iva.toNumber()),
    total: formatter.format(total.toNumber()),
    cantidadProducto,
    handleDecrementCantidad,
    handleIncrementCantidad,
    handleAddProductoCarrito
  }
}

export default useProductoPorId