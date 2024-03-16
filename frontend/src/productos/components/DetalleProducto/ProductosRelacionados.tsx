import { DetalleProductoContext } from '../../context/DetalleProductoContext'
import ProductoGridItem from '../ProductosGridItem'
import { useContext } from 'react'
import ProductosRelacionadosSkeleton from '../skelleton/ProductosRelacionadosSkeleton'

const ProductosRelacionados = () => {

    const { productosRelacionados, isLoading } = useContext(DetalleProductoContext)!
    return (
        <>
            {
                isLoading
                    ?
                    <ProductosRelacionadosSkeleton />
                    :
                    <>
                        {
                            productosRelacionados.map((producto) => (
                                <div className="mb-4" key={producto.id}>
                                    <ProductoGridItem
                                        producto={producto}
                                        tipo='secondary'
                                    />
                                </div>
                            ))
                        }
                    </>
            }
        </>
    )
}

export default ProductosRelacionados