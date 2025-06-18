import Container from '../../global/components/Container'

const Marcas = () => {
    return (
        <Container>
            <div className="px-4 py-24 pt-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-center text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                <defs>
                                    <pattern id="903f4a9e-7ac3-441c-9613-04c15fcc0a14" x="0" y="0" width=".135" height=".30">
                                        <circle cx="1" cy="1" r=".7"></circle>
                                    </pattern>
                                </defs>
                                <rect fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)" width="52" height="24"></rect>
                            </svg>
                            <span className="relative text-center block w-full">Aqui encontraras.
                            </span>
                        </span>
                    </h2>

                </div>
                <div id="carousel-marcas" data-carousel="static" className="grid relative grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">

                    <article className="text-center">
                        <div className="flex items-center justify-center w-28 h-28 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">

                            <img src="/Images/marcas/1.webp" alt="" />
                        </div>
                    </article>
                    <article className="text-center">
                        <div className="flex items-center justify-center w-28 h-28 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">

                            <img src="/Images/marcas/2.webp" alt="" />
                        </div>
                    </article>
                    <article className="text-center">
                        <div className="flex items-center justify-center w-28 h-28 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">

                            <img src="/Images/marcas/3.webp" alt="" />
                        </div>
                    </article>
                    <article className="text-center">
                        <div className="flex items-center justify-center w-28 h-28 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">

                            <img src="/Images/marcas/4.webp" alt="" />
                        </div>
                    </article>
                    <article className="text-center">
                        <div className="flex items-center justify-center w-28 h-28 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">

                            <img src="/Images/marcas/5.webp" alt="" />
                        </div>
                    </article>
                    <article className="text-center">
                        <div className="flex items-center justify-center w-28 h-28 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">

                            <img src="/Images/marcas/6.webp" alt="" />
                        </div>
                    </article>

                </div>
                <div className="text-center">
                    <a
                        href="/productos"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-alibabeto-1 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Ver Todos Los Productos
                        <span className="ml-1 -mr-2">
                            <svg className="w-8 h-8 text-white" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </Container>

    )
}

export default Marcas