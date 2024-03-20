import { Elements } from '@stripe/react-stripe-js'
import MainLayout from '../../layouts/MainLayout'
import ProductosGrid from '../../productos/components/ProductosGrid'
import { ProductosGridContainer } from '../../productos/styled'
import CuentaTotal from '../components/CuentaTotal'
import ListaProductos from '../components/ListaProductos'
import { CarritoContext } from '../context/CarritoContext'
import useCarrito from '../hooks/useCarrito'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from '../components/PaymentForm'

const stripePromise = loadStripe('pk_test_51OwOXeBLBF0dttMQtVfyklMPuP2gFw1xddFySA3DElUfeFUJJ3Miw81vPIfK9NJBP473EViZHhVcWcY4aRVW4Utx00qRnyPmOP');

const CarritoIndexPage = () => {

    const options: any = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <MainLayout>

                <div className="px-6 md:px-0 min-h-[80vh]">

                    <div className="my-8">
                        <h2 className="text-2xl font-bold">
                            Carrito de compras
                        </h2>

                        <PaymentForm />

                    </div>

                </div>

            </MainLayout>
        </Elements>
    )
}

export default CarritoIndexPage