import Container from "../../global/components/Container"

const Bento = () => {
    return (
        <Container background="rgba(36,155,255,.16)" classes='py-14'>

            <section className="item-bento-container grid auto-rows-[350px] grid-cols-1 md:grid-cols-4 gap-4">

                <div
                    className={`item-bento row-span-1 rounded-xl border-1 relative flex-wrap border-slate-400/10 bg-neutral-100 dark:bg-neutral-900`}
                >
                    <div className="content absolute w-full h-full z-10 p-4 flex flex-col justify-end">
                        <h2 className="text-3xl font-semibold text-white transition group-hover:text-purple-950 dark:text-white">
                            Audifonos
                        </h2>
                        <a href="/productos?categoria=7" className="w-full p-2 px-1 text-center font-semibold rounded-md mt-3 transition bg-[#6D172A] text-white shadow-xlsm:w-max max-w-[152px]">
                            Ver Audifonos
                        </a>
                    </div>
                    <img
                        src="/Images/bento/1.webp"
                        alt=""
                        className="rounded-xl h-full absolute"
                    />
                </div>
                <div
                    className={`item-bento row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 relative dark:bg-neutral-900`}
                >
                    <div className="content absolute w-full h-full z-10 p-4 flex flex-col justify-end">
                        <h2 className="text-3xl font-semibold text-shadow text-white transition group-hover:text-purple-950 dark:text-white">
                            Los mejores smartwatch
                        </h2>
                        <a href="/productos?categoria=12" className="w-full p-2 px-1 text-center font-semibold rounded-md mt-3 transition bg-white text-[#D6BA55] shadow-xlsm:w-max max-w-[152px]">
                            Ver relojes
                        </a>
                    </div>
                    <img
                        src="/Images/bento/2.webp"
                        alt=""
                        className="rounded-xl h-full absolute"
                    />
                </div>
                <div
                    className={`item-bento row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 relative dark:bg-neutral-900 col-span-2`}
                >
                    <div className="content absolute h-full z-10 p-4 flex flex-col justify-end w-3/4">
                        <h2 className="text-3xl font-semibold text-shadow text-white transition group-hover:text-purple-950 dark:text-white">
                            Laptops de alta gama
                        </h2>
                        <p className="dark:text-gray-300 text-white font-semibold mt-2">Las mejores para juegos y trabajo</p>
                        <a href="/productos?categoria=5" className="w-full p-2 px-1 text-center font-semibold rounded-md mt-3 transition bg-white text-[#C83D44] shadow-xlsm:w-max max-w-[152px]">
                            Ver relojes
                        </a>
                    </div>
                    <img
                        src="/Images/bento/3.webp"
                        alt=""
                        className="rounded-xl h-full absolute hover:scale-110"
                    />
                </div>
                <div
                    className={`item-bento row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 relative dark:bg-neutral-900 col-span-2`}
                >
                    <div className="content absolute h-full z-10 p-4 flex flex-col justify-end w-3/4">
                        <h2 className="text-3xl font-semibold text-shadow text-black transition group-hover:text-purple-950 dark:text-white">
                            Laptops de alta gama
                        </h2>
                        <p className="dark:text-gray-300 text-black font-semibold mt-2">Las mejores para juegos y trabajo</p>
                        <a href="/productos?categoria=4" className="w-full p-2 px-1 text-center font-semibold rounded-md mt-3 transition bg-[#6D172A] text-white shadow-xlsm:w-max max-w-[152px]">
                            Ver relojes
                        </a>
                    </div>
                    <img
                        src="/Images/bento/4.webp"
                        alt=""
                        className="rounded-xl h-full absolute"
                    />
                </div>
                <div
                    className={`item-bento row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 relative dark:bg-neutral-900`}
                >
                    <div className="content absolute h-full z-10 p-4 flex flex-col justify-end w-3/4">
                        <h2 className="text-3xl font-semibold text-shadow text-white transition group-hover:text-purple-950 dark:text-white">
                            Consolas
                        </h2>
                        <a href="/productos?categoria=13" className="w-full p-2 px-1 text-center font-semibold rounded-md mt-3 transition bg-white text-[#107C10] shadow-xlsm:w-max max-w-[152px]">
                            Ver consolas
                        </a>
                    </div>
                    <img
                        src="/Images/bento/5.webp"
                        alt=""
                        className="rounded-xl h-full absolute"
                    />
                </div>
                <div
                    className={`item-bento row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 relative dark:bg-neutral-900`}
                >
                    <div className="content absolute h-full z-10 p-4 flex flex-col justify-end w-3/4">
                        <h2 className="text-3xl font-semibold text-shadow text-white transition group-hover:text-purple-950 dark:text-white">
                            Familia Eco
                        </h2>
                        <a href="/productos?categoria=14" className="w-full p-2 px-1 text-center font-semibold rounded-md mt-3 transition bg-white text-[#147DFD] shadow-xlsm:w-max max-w-[152px]">
                            Ver ecos
                        </a>
                    </div>
                    <img
                        src="/Images/bento/6.webp"
                        alt=""
                        className="rounded-xl h-full absolute"
                    />
                </div>

            </section>
        </Container>
    )
}

export default Bento