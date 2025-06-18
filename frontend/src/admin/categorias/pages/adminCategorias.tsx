/* eslint-disable react-hooks/rules-of-hooks */

import Button from '../../../global/components/Button'
import TableCategorias from '../components/tableCategorias'


const adminCategorias = () => {



    return (

        <>
            <div className="flex justify-start w-full">
                <Button
                    to={"/admin/Categorias/create"}
                    className="px-6"
                    text="Crear categorias"
                />
            </div>

            <TableCategorias />
        </>


    )
}

export default adminCategorias