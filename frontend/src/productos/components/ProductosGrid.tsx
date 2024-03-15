// import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { type FC } from "react";

import type { Producto } from "../types/productos.types";
import ProductoGridItem from "./ProductosGridItem";

type Props = {
    productos: Producto[]
    titulo: string
}

const ProductosGrid: FC<Props> = ({ productos = [], titulo = "" }) => {

    return (
        <>
            <h2 className="text-5xl font-bold mb-10">
                {titulo}
            </h2>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-4">
                {/* <Flicking renderOnlyVisible={true} align={false} circular={true}> */}
                {productos.map((_, index) =>
                    <div style={{ border: "1px solid #fff" }} className="flicking-panel border-black w-[100%] border-1 " key={index}>
                        <ProductoGridItem
                            key={_.id}
                            producto={_}
                            tipo='primary'
                        />
                    </div>
                )}
                {/* </Flicking> */}
            </div>
        </>
    );
}

export default ProductosGrid