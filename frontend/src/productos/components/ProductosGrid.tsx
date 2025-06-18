import { type FC } from "react";

import ProductoGridItem, { TipoBotton } from "./ProductosGridItem";
import type { Producto } from "../types/productos.types";

type Props = {
    productos: Producto[]
    titulo?: string
    tipo?: TipoBotton
}

const ProductosGrid: FC<Props> = ({ productos = [], titulo = null, tipo = 'primary' }) => {

    return (
        <>
            {
                titulo &&
                <h2 className="text-5xl font-bold mb-10">
                    {titulo}
                </h2>
            }
            <div className="grid-productos grid grid-a grid-cols-1 place-items-center md:grid-cols-4 gap-4">
                {/* <Flicking renderOnlyVisible={true} align={false} circular={true}> */}
                {productos.map((_, index) =>
                    <div style={{ border: "1px solid #fff" }} className="flicking-panel border-black w-[100%] border-1 " key={index}>
                        <ProductoGridItem
                            key={_.id}
                            producto={_}
                            tipo={tipo}
                        />
                    </div>
                )}
                {/* </Flicking> */}
            </div>
        </>
    );
}

export default ProductosGrid