import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import ProductoCarritoItem from "../ProductoCarritoItem"

const ListaProductos = () => {

    const { conceptos } = useContext(CarritoContext)!
    return (
        <div className="grid w-full md:w-[70%] border rounded-lg grid-contenedor-productos">
            <article className="item-card grid grid-cols-4 p-4 py-3 text-lg grid-columna border-r-0 border-l-0 border-t-0 border-b-gray-300 border">
                <div className="col font-bold text-md">Producto</div>
                <div className="col font-bold text-md">Total</div>
                <div className="col font-bold text-md">Cantidad</div>
                <div className="col font-bold text-md">Eliminar</div>
            </article>

            {
                conceptos?.map(articulo => (
                    <ProductoCarritoItem
                        key={articulo.id}
                        {...articulo}
                    />
                ))
            }

        </div>
    )
}

export default ListaProductos