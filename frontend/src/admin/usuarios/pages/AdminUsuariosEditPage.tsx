/* eslint-disable @typescript-eslint/no-explicit-any */
// import useCategorias from "../../categorias/hooks/useCategorias";
import Button from "../../../global/components/Button";
import useEditUsuario from "../hooks/useEditUsuario";

const AdminUsuariosEditPage = () => {

    const { submit, isLoading, register, errors } = useEditUsuario()

    return (
        <>
            <div className="rounded-lg mx-auto bg-white max-w-[50%] border p-5">
                <form onSubmit={submit} noValidate>
                    <div className="grid gap-6 mb-6 lg:grid-cols-1">

                        <h2 className="text-3xl font-bold">Actualiza tu usuario</h2>

                        <article className="grid md:grid-cols-1 md:gap-6">

                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className={`
                                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                                        ${isLoading && 'opacity-50'}
                                        ${errors.nombre
                                            ? 'bg-red-50 border border-red-500 text-red-500'
                                            : 'border-gray-300 bg-gray-50'}
                                        `}
                                    placeholder="Angel..."
                                    // name='codigo'
                                    // value={formState.codigo}
                                    // onChange={onInputChange}
                                    {
                                    ...register("nombre", {
                                        // disabled: isLoading,
                                        required: {
                                            value: true,
                                            message: 'El campo nombre es requerido'
                                        },
                                        maxLength: 100,
                                        minLength: {
                                            message: 'El nombre debe ser un campo valido',
                                            value: 1
                                        }
                                    })}
                                />

                                {
                                    errors.nombre &&
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.nombre.message
                                        }
                                    </p>
                                }

                            </div>

                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    placeholder="Mendez..."
                                    className={`
                                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                                        ${errors.apellidos
                                            ? 'bg-red-50 border border-red-500 text-red-500'
                                            : 'border-gray-300 bg-gray-50'}
                                        `}
                                    // name='codigo'
                                    // value={formState.codigo}
                                    // onChange={onInputChange}
                                    {...register("apellidos", {
                                        required: {
                                            value: true,
                                            message: 'El campo apellidos es requerido'
                                        },
                                        maxLength: 100,
                                        minLength: {
                                            message: 'Los apellidos debe ser un campo valido',
                                            value: 1
                                        }
                                    })}
                                />

                                {
                                    errors.apellidos &&
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.apellidos.message
                                        }
                                    </p>
                                }

                            </div>

                        </article>

                        <article className="grid md:grid-cols-1 md:gap-6">
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Correo Electronico
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className={`
                                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                                        ${errors.correo
                                            ? 'bg-red-50 border border-red-500 text-red-500'
                                            : 'border-gray-300 bg-gray-50'}
                                        `}
                                    placeholder="prueba@gmail.com"
                                    // name='descripcion'
                                    // value={formState.descripcion}
                                    // onChange={onInputChange}
                                    {...register("correo", {
                                        required: {
                                            value: true,
                                            message: 'El campo correo es requerido'
                                        },
                                        maxLength: 1000,
                                        minLength: {
                                            message: 'El correo debe ser un campo valido',
                                            value: 1
                                        }
                                    })}
                                />

                                {
                                    errors.correo &&
                                    <p className="mt-2 mb-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.correo.message
                                        }
                                    </p>
                                }

                            </div>

                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="last_name"
                                    className={`
                                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                                        ${errors.password
                                            ? 'bg-red-50 border border-red-500 text-red-500'
                                            : 'border-gray-300 bg-gray-50'}
                                        `}
                                    // name='descripcion'
                                    // value={formState.descripcion}
                                    // onChange={onInputChange}
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'El campo contraseña es requerido'
                                        },
                                        maxLength: 1000,
                                        minLength: {
                                            message: 'La contraseña debe ser un campo valido',
                                            value: 1
                                        }
                                    })}
                                />

                                {
                                    errors.password &&
                                    <p className="mt-2 mb-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.password.message
                                        }
                                    </p>
                                }

                            </div>

                            <div>
                                <label
                                    htmlFor="company"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Rol
                                </label>
                                <select
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {
                                    ...register("RolID")
                                    }
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="1">Root</option>
                                    <option value="2">Cliente</option>
                                    <option value="3">Vendedor</option>
                                </select>

                                {
                                    errors.RolID &&
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.RolID.message
                                        }
                                    </p>
                                }

                            </div>

                        </article>


                    </div>

                    <Button
                        isLoading={isLoading}
                    >
                        Actualizar Usuario
                    </Button>

                </form>

            </div >
        </>

    )
}

export default AdminUsuariosEditPage