import Container from "../../global/components/Container"

const Bento2 = () => {
    return (
        <Container
        >

            <section className="">
                <div className="md:flex md:-mx-4">
                    <div
                        className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1556196148-1fb724238998?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                        }}
                    >
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div className="px-10 max-w-xl">
                                <h2 className="text-2xl text-white font-semibold">Electronicos</h2>
                                {/* <p class="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p> */}
                                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                    <span>Comprar Ahora</span>
                                    <svg
                                        className="h-5 w-5 mx-2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")'
                        }}
                    >
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div className="px-10 max-w-xl">
                                <h2 className="text-2xl text-white font-semibold">Videojuegos</h2>
                                {/* <p class="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p> */}
                                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                    <span>Comprar Ahora</span>
                                    <svg
                                        className="h-5 w-5 mx-2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>

    )
}

export default Bento2