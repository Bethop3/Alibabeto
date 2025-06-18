import { Link } from "react-router-dom"
import Button from "../../global/components/Button"
import useRegister from "../hooks/useRegister"

const RegisterForm = () => {

    const { register, submit, isLoading, errors } = useRegister()

    return (
        <>
            <form onSubmit={submit} noValidate={true}>

                {/* <pre>
                    {
                        JSON.stringify(auth, null, 3)
                    }
                </pre> */}
                <article className='mb-3'>
                    <label
                        className="text-gray-600 font-bold inline-block pb-2"
                        htmlFor="email"
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
                        disabled={isLoading}
                        placeholder="Edison..."
                        {
                        ...register("nombre", {
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

                    {/* <pre>
                        {JSON.stringify(isSubmitted, null, 3)}
                    </pre> */}

                    {
                        errors.nombre &&
                        <p className="mt-2 font-bold text-sm text-red-600 dark:text-red-500">
                            {
                                errors.nombre.message
                            }
                        </p>
                    }
                </article>

                <article className='mb-3'>
                    <label
                        className="text-gray-600 font-bold inline-block pb-2"
                        htmlFor="email"
                    >
                        Apellidos
                    </label>
                    <input
                        className={`
                         border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                         ${isLoading && 'opacity-50'}
                         ${errors.nombre
                                ? 'bg-red-50 border border-red-500 text-red-500'
                                : 'border-gray-300 bg-gray-50'}
                        `}
                        type="text"
                        disabled={isLoading}
                        placeholder="Robles Lopez..."
                        {
                        ...register("apellidos", {
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
                        errors.apellidos &&
                        <p className="mt-2 font-bold text-sm text-red-600 dark:text-red-500">
                            {
                                errors.apellidos.message
                            }
                        </p>
                    }
                </article>

                <article className='mb-3'>
                    <label
                        className="text-gray-600 font-bold inline-block pb-2"
                        htmlFor="email"
                    >
                        Correo Electronico
                    </label>
                    <input
                        className={`
                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                        ${isLoading && 'opacity-50'}
                        ${errors.correo
                                ? 'bg-red-50 border border-red-500 text-red-500'
                                : 'border-gray-300 bg-gray-50'}
                       `}
                        disabled={isLoading}
                        type="email"
                        placeholder="mehedi@jaman.com"
                        {
                        ...register("correo", {
                            required: {
                                value: true,
                                message: 'El campo correo es requerido'
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'El correo debe ser un campo válido'
                            },
                            maxLength: 100,
                            minLength: {
                                message: 'El correo debe ser un campo valido',
                                value: 1
                            }
                        })}
                    />
                    {
                        errors.correo &&
                        <p className="mt-2 font-bold text-sm text-red-600 dark:text-red-500">
                            {
                                errors.correo.message
                            }
                        </p>
                    }
                </article>

                <article className='mb-3'>
                    <label
                        className="text-gray-600 font-bold inline-block pb-2"
                    >
                        Contraseña
                    </label>
                    <input
                        className={`
                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                        ${isLoading && 'opacity-50'}
                        ${errors.password
                                ? 'bg-red-50 border border-red-500 text-red-500'
                                : 'border-gray-300 bg-gray-50'}
                       `}
                        autoComplete={'false'}
                        disabled={isLoading}
                        type="password"
                        placeholder="Tu contraseña..."
                        {
                        ...register("password", {
                            required: {
                                value: true,
                                message: 'El campo contraseña es requerido'
                            },
                            maxLength: 100,
                            minLength: {
                                message: 'La contraseña debe tener al menos 6 caracteres',
                                value: 6
                            }
                        })}
                    />
                    {
                        errors.password &&
                        <p className="mt-2 font-bold text-sm text-red-600 dark:text-red-500">
                            {
                                errors.password.message
                            }
                        </p>
                    }
                </article>

                <div className="mt-5">
                    <Button
                        isLoading={isLoading}
                    // className="bg-alibabeto-1 w-full pt-2 pr-5 pb-2 pl-5 rounded-md text-white font-bold cursor-pointer"
                    >
                        Registrarse
                    </Button>
                </div>

                <div className="flex flex-col mt-3 mb-3">
                    <div className="w-full">
                        ¿Ya cuentas con cuenta?
                        <Link className="font-bold ml-2 text-blue-600" to="/login">
                            <strong>Inicia Sesión</strong>
                        </Link>
                    </div>
                </div>
            </form>

        </>

    )
}

export default RegisterForm