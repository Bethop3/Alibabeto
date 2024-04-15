import { AdminUsuarioListadoWrapper } from "../context/AdminUsuariosListadoContext"
import TablaUsuarios from "../components/TablaUsuarios"
import Button from "../../../global/components/Button"

const AdminUsuariosIndexPage = () => {
    return (
        <AdminUsuarioListadoWrapper>
            <div className="flex justify-start w-full">
                <Button
                    to={"/admin/usuarios/create"}
                    className="px-6"
                    text="Crear Usuario"
                />
            </div>
            <TablaUsuarios />
        </AdminUsuarioListadoWrapper>
    )
}

export default AdminUsuariosIndexPage