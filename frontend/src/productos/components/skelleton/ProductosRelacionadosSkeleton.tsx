import { Fragment } from "react/jsx-runtime"
import CardProductoSkeleton from "./CardProductoSkeleton"

const ProductosRelacionadosSkeleton = () => {
    return (
        <Fragment>
            <CardProductoSkeleton />
            <CardProductoSkeleton />
            <CardProductoSkeleton />
            <CardProductoSkeleton />
        </Fragment>
    )
}

export default ProductosRelacionadosSkeleton