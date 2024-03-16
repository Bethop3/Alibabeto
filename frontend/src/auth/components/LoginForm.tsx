// import useLogin from '../../hooks/useLogin'
// import WrapperApp from './WrapperApp'

import Button from "../../global/components/Button"
import useLogin from "../hooks/useLogin"

const LoginForm = () => {

    const { handleSubmit, onInputChange, formState, isLoading } = useLogin()

    return (
        <>
            <form onSubmit={handleSubmit} method="post" action="/api/login">

                {/* <pre>
                    {
                        JSON.stringify(auth, null, 3)
                    }
                </pre> */}
                <div className='mb-3'>
                    <label
                        className="text-gray-600 font-bold inline-block pb-2"
                        htmlFor="email"
                    >
                        Correo
                    </label>
                    <input
                        className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                        type="email"
                        name="correo"
                        placeholder="mehedi@jaman.com"
                        onChange={onInputChange}
                        value={formState.correo}
                    />
                </div>
                <div className='mb-3'>
                    <label
                        className="text-gray-600 font-bold inline-block pb-2"
                        htmlFor="password"
                    >
                        Contraseña
                    </label>
                    <input
                        className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                        type="password"
                        name="password"
                        placeholder="******"
                        onChange={onInputChange}
                        value={formState.password}
                    />
                </div>
                <div className="flex flex-col mb-3">
                    {/* <div className="w-full">
                    <input type="checkbox" name="remeberMe" />
                    <label htmlFor="remeberMe">Remeber me</label>
                </div> */}
                    <div className="w-full">
                        <a className="font-bold text-blue-600" href="">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </div>
                <div>
                    <Button
                        isLoading={isLoading}
                    // className="bg-alibabeto-1 w-full pt-2 pr-5 pb-2 pl-5 rounded-md text-white font-bold cursor-pointer"
                    >
                        Iniciar Sesión
                    </Button>
                </div>
            </form>

        </>

    )
}

export default LoginForm