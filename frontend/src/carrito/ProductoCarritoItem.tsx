import { CarritoContext } from '../../../context/CarritoContext'
import type { ProdutoCarito } from '../../../types/carrito.type'
import { useContext } from 'react'
import type { FC } from 'react'
import { formatter } from '../../../utils/formatter'

const ProductoCarritoItem: FC<ProdutoCarito> = (props) => {

    const {
        handleDeleteArticulo,
        isLoading
    } = useContext(CarritoContext)!

    const articulo = props

    const handleDelete = () => {

        handleDeleteArticulo(articulo.id)

    }

    return (
        <article
            className={
                `item-card grid grid-cols-1 md:grid-cols-4 p-4 grid-columna border border-b-gray-200
                ${isLoading && 'opacity-40'}
                `
            }
        >
            <div className="col flex flex- md:flex-row items-start md:items-center font-bold gap-x-2">
                <img
                    className="w-12 object-contain rounded-md"
                    // src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                    src={articulo.producto.imagen}
                    alt=""
                />
                <p className="flex flex-col">
                    <span className="text-xs opacity-40">
                        {
                            articulo.producto.codigo
                        }
                    </span>
                    {
                        articulo.producto.descripcion
                    }
                </p>
            </div>
            <div className="col font-bold flex items-center">
                {
                    formatter.format(articulo.total)
                }
            </div>
            <div className="col font-bold flex items-center">
                {
                    articulo.cantidad
                }
            </div>
            <div className="col font-bold flex items-center">
                <button disabled={isLoading} className={
                    `${isLoading ? "opacity-40" : ""}`
                } onClick={handleDelete}>
                    <svg
                        className="w-6 h-6 text-red-500 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </article>
    )
}

export default ProductoCarritoItem