import Button from "../../../global/components/Button"
import { AdminProductosListadoWrapper } from "../context/AdminProductosListadoContext"
import TableProductos from "../components/TableProductos"

const AdminProductosIndexPage = () => {

    // const { productos } = useProductosAdmin()
    // const { productos } = useContext(AdminProductosListadoContext)!
    return (
        <AdminProductosListadoWrapper>

            <div className="flex justify-start w-full">
                <Button
                    to={"/admin/producto/create"}
                    className="px-6"
                    text="Crear Producto"
                />
            </div>

            <TableProductos />
        </AdminProductosListadoWrapper>
    )
}

export default AdminProductosIndexPage