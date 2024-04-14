import { Link } from "react-router-dom"

const RightSideNoAuth = () => {
    return (
        <div className="flex">
            <Link
                to="/login"
                type="button"
                title="Start buying"
                className="mr-2 md:mr-1 px-4 md:min-w-[120px] py-2 md:text-sm text-xs text-center rounded-md transition bg-white shadow-xl sm:w-max border-blue-100 border"
            >
                <span className="block text-black font-semibold">Iniciar Sesión</span>
            </Link>
            <Link
                to="/registro"
                type="button"
                title="Start buying"
                className="mr-3 max-w-[100px] min-w-[120px] md:text-sm text-xs py-2 md:px-4 text-center rounded-md transition bg-alibabeto-1 shadow-xl sm:w-max"
            >
                <span className="block text-white font-semibold">Registrarse</span>
            </Link>
        </div>
    )
}

export default RightSideNoAuth