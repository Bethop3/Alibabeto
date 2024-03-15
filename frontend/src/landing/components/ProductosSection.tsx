import ProductoGridItem from "../../productos/components/ProductosGridItem"
// import { Producto } from "../../productos/types/productos.types"
import Container from "../../global/components/Container"
import { FC } from "react"
import useProductosGrid from "../hooks/useProductosGrid"

type Props = {
    idCategoria: number
    titulo: string
}

const ProductosSection: FC<Props> = ({ idCategoria, titulo }) => {

    const { productos } = useProductosGrid(idCategoria)
    return (
        <Container classes="py-14">
            <h2 className="text-5xl font-bold mb-10">
                {titulo}
            </h2>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-4">
                {productos.map((_, index) =>
                    <div style={{ border: "1px solid #fff" }} className="flicking-panel border-black w-[100%] border-1 " key={index}>
                        <ProductoGridItem
                            key={_.id}
                            producto={_}
                            tipo='primary'
                        />
                    </div>
                )}
            </div>
        </Container>
    )
}

export default ProductosSection