const RightSideNoAuth = () => {
    return (
        <div>
            <a
                href="/login"
                type="button"
                title="Start buying"
                className="w-full mr-1 min-w-[120px] py-2 px-x text-sm text-center rounded-md transition bg-white shadow-xl sm:w-max border-blue-100 border"
            >
                <span className="block text-black font-semibold">Iniciar Sesión</span>
            </a>
            <a
                href="/registro"
                type="button"
                title="Start buying"
                className="w-full  min-w-[120px] text-sm  py-2 px-4 text-center rounded-md transition bg-alibabeto-1 shadow-xl sm:w-max"
            >
                <span className="block text-white font-semibold">Registrarse</span>
            </a>
        </div>
    )
}

export default RightSideNoAuth