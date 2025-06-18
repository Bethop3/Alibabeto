import Container from '../../global/components/Container'

const MetodosPago = () => {
    return (
        <Container>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                        <span className="relative inline-block">
                            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                <defs>
                                    <pattern id="df31b9f6-a505-42f8-af91-d2b7c3218e5c" x="0" y="0" width=".135" height=".30">
                                        <circle cx="1" cy="1" r=".7"></circle>
                                    </pattern>
                                </defs>
                                <rect fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)" width="52" height="24"></rect>
                            </svg>
                            Tenemos los mejores metodos de pago
                        </span>

                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        En alibabeto puedes pagar con efectivo, tarjeta de crédito, débito o a través de las siguientes plataformas.
                    </p>
                </div>
                <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <img className='w-[45px]' src="/Images/visa.svg" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Paga después con tu tarjeta de crédito</h6>
                        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                            Haz tus compras con tu tarjeta de crédito y paga más tarde en Alibabeto.
                        </p>
                    </div>
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <img className='w-[35px]' src="/Images/paypal.svg" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Paga de forma rápida y segura con PayPal</h6>
                        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                            Realiza pagos rápidos y seguros en Alibabeto utilizando tu cuenta PayPal.
                        </p>
                    </div>
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <img className='w-[42px]' src="/Images/transfer.svg" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Pago directo por transferencia</h6>
                        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                            Realiza pagos directos desde tu cuenta bancaria al comprar en Alibabeto.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MetodosPago