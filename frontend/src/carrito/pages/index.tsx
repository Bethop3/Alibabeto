import MainLayout from '../../layouts/MainLayout'

const IndexCarritoPage = () => {
    return (
        <MainLayout title='' footer={false}>

            <div className="px-6 md:px-0">
                <div className="my-8">
                    <h2 className="text-2xl font-bold">
                        Carrito de compras
                    </h2>

                    <section className="custom-grid rounded-lg mt-5 gap-4">

                        {/* <ProductosCarrito
                            client:only
                        /> */}

                    </section>
                </div>
            </div>

        </MainLayout>
    )
}

export default IndexCarritoPage