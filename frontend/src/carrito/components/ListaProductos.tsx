import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import ProductoCarritoItem from "./ProductoCarritoItem"
import ProductoCarritoItemSkeleton from "./skeleton/ProductoCarritoItemSkeleton"
import Button from "../../global/components/Button"

const ListaProductos = () => {

    const { conceptos, isLoading } = useContext(CarritoContext)!
    return (
        <div className="grid w-full md:w-[70%] border rounded-lg grid-contenedor-productos">

            <article className={`item-card grid grid-cols-4 p-4 ${isLoading ? 'gap-5' : 'gap-3'} py-3 text-lg grid-columna border-r-0 border-l-0 border-t-0 border-b-gray-300 border`}>
                <div className="col font-bold text-md">Producto</div>
                <div className="col font-bold text-md">Total</div>
                <div className="col font-bold text-md">Cantidad</div>
                <div className="col font-bold text-md">Eliminar</div>
            </article>

            {/* <ProductoCarritoItemSkeleton />
            <ProductoCarritoItemSkeleton />
            <ProductoCarritoItemSkeleton />
            <ProductoCarritoItemSkeleton />
            <ProductoCarritoItemSkeleton />
            <ProductoCarritoItemSkeleton /> */}

            {
                isLoading
                    ?
                    <>
                        <ProductoCarritoItemSkeleton />
                        <ProductoCarritoItemSkeleton />
                        <ProductoCarritoItemSkeleton />
                        <ProductoCarritoItemSkeleton />
                        <ProductoCarritoItemSkeleton />
                        <ProductoCarritoItemSkeleton />

                    </>
                    :
                    <>
                        {
                            conceptos.length > 0
                                ?
                                <>
                                    {
                                        conceptos?.map(articulo => (
                                            <ProductoCarritoItem
                                                key={articulo.id}
                                                {...articulo}
                                            />
                                        ))
                                    }
                                </>
                                :
                                <div className="flex flex-col items-center my-10">
                                    <img
                                        src="/carrito-vacio.svg"
                                        className="w-full max-w-[50%] mx-auto"
                                    />
                                    <h2 className="text-2xl font-bold text-gray-600">Aun no hay productos en tu carrito</h2>
                                    <Button
                                        to={'/productos'}
                                        className="max-w-[200px] px-5 mt-5"
                                        text="Ver Productos"
                                    />
                                </div>
                        }
                    </>
            }

        </div>
    )
}

export default ListaProductos