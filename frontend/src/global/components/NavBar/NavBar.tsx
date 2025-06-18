/* eslint-disable no-constant-condition */
import RightSideNoAuth from './RightSideNoAuth'
import RightSide from './RightSide'
import BuscadorProductos from './BuscadorProductos'
import useAuth from '../../../auth/hooks/useAuth'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const { usuario } = useAuth()

    return (
        <nav className="bg-white w-full flex relative justify-between items-center mx-auto h-20">
            <div className="max-w-[1100px] container mx-auto flex items-center justify-between">

                <section className="inline-flex">
                    <Link className="_o6689fn" to="/"
                    ><div className="hidden md:flex items-center">
                            <img
                                src="../../Images/Logo.png"
                                className="h-12 w-12 object-cover mr-3"
                                alt="Flowbite Logo"
                            />
                            <p
                                style={{
                                    color: "black",
                                    transform: "skew(-10deg)"
                                }}
                                className="mr-4 font-bold text-lg"
                            >
                                ALIBABETO
                            </p>

                        </div>
                        <div className="flex items-center md:hidden">
                            <svg
                                width={30}
                                height={32}
                                fill="currentcolor"
                                style={{ display: "block" }}
                            ></svg>
                            <img src="Images/Logo.png" className="h-12" alt="Flowbite Logo" />

                        </div>
                    </Link>
                </section>

                <div className="hidden md:inline-block">
                    <div className="inline-flex items-center max-w-full">
                        <button
                            type="submit"
                            className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-96 border rounded-full px-4 py-1 outline-none"
                        >
                            <BuscadorProductos />

                            <div
                                className="flex items-center justify-center absolute right-0 h-10 w-10"
                            >
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
                                        strokeWidth: "5.33333",
                                        overflow: "visible"
                                    }}
                                >
                                    <g fill="none">
                                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                                    </g>
                                </svg>

                            </div>
                        </button>
                    </div>
                </div>

                {
                    usuario
                        ?
                        <RightSide />
                        :
                        <RightSideNoAuth />
                }

            </div>

        </nav>

    )
}

export default NavBar