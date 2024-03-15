import useCarrito from "../../../hooks/useCarrito"
import Button from "../buttons/Button"
import { CarritoContext } from "../../../context/CarritoContext"
import ProductoCarritoItem from "./ProductoCarritoItem"

const ProductosCarrito = () => {

    const carrito = useCarrito()

    const {
        importe,
        iva,
        total,
        conceptos,
        isLoading,
        handleSubmitCarrito
    } = carrito

    return (
        <CarritoContext.Provider value={carrito}>
            <div className="grid w-full md:w-[70%] border rounded-lg grid-contenedor-productos">
                <article className="item-card grid grid-cols-4 p-4 py-2 text-lg grid-columna border-r-0 border-l-0 border-t-0 border-b-gray-300 border">
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
            <article className="item-card border rounded-lg w-full md:w-[30%] h-max p-4">
                <h3 className="font-bold text-2xl">Total</h3>
                <hr className="mt-3 mb-3 block" />
                <p className="mb-3">
                    <strong className="flex items-start justify-between">
                        <span>Importe:</span>
                        <span> {importe} </span>
                    </strong>
                </p>
                <p className="mb-3">
                    <strong className="flex items-start justify-between">
                        <span>IVA:</span>
                        <span> {iva} </span>
                    </strong>
                </p>
                <p>
                    <strong className="flex items-start justify-between">
                        <span>Total:</span>
                        <span> {total} </span>
                    </strong>
                </p>
                <hr className="mt-3 mb-3" />

                <Button
                    onClick={handleSubmitCarrito}
                    isLoading={isLoading}
                    text="Pagar"
                />
                <div className="mt-3">
                    <p className="font-semibold opacity-70 text-gray-500">Aceptamos</p>
                    <img
                        className="w-2/4"
                        src="https://www.classltd.com/wp-content/uploads/2021/09/class-payments.png"
                        alt=""
                    />
                </div>
            </article>
        </CarritoContext.Provider >
    )
}

export default ProductosCarrito