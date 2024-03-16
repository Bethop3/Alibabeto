import { useRef, useState } from "react"
import Carrito from "./Carrito"
import useAuth from "../../../auth/hooks/useAuth";

const RightSide = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dropdowRef = useRef<HTMLDivElement>(null);
    const { handleLogout } = useAuth()

    const handleToggle = () => {

        if (!isOpen) {
            dropdowRef!.current!.classList.remove('hidden');
        }
        else {
            dropdowRef!.current!.classList.add('hidden');
        }

        setIsOpen(!isOpen)

    }

    return (
        <div className="flex-initial">
            <div className="flex justify-end items-center relative">
                <Carrito />
                <div className="flex items-center">
                    <div className="block"  >
                        <div className="inline relative">
                            <button
                                onClick={handleToggle}
                                id="dropdown-btn"
                                type="button"
                                className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                            >
                                <div className="pl-1">
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            fill: "none",
                                            height: 16,
                                            width: 16,
                                            stroke: "currentcolor",
                                            strokeWidth: 3,
                                            overflow: "visible"
                                        }}
                                    >
                                        <g fill="none" fillRule="nonzero">
                                            <path d="m2 16h28" />
                                            <path d="m2 24h28" />
                                            <path d="m2 8h28" />
                                        </g>
                                    </svg>

                                </div>

                                <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            width: "100%",
                                            fill: "currentcolor"
                                        }}
                                    >
                                        <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                                    </svg>

                                </div>
                            </button>
                            <div
                                id="dropdown-menu"
                                ref={dropdowRef}
                                className="hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-[100]"
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >Perfil</a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >Configuración</a>
                                <p
                                    onClick={handleLogout}
                                    className="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >Cerrar Sesión</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide