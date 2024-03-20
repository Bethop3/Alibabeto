/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PaymentForm from '../components/PaymentForm'
import { Elements } from '@stripe/react-stripe-js'
import MainLayout from '../../layouts/MainLayout'
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe('pk_test_51OwOXeBLBF0dttMQtVfyklMPuP2gFw1xddFySA3DElUfeFUJJ3Miw81vPIfK9NJBP473EViZHhVcWcY4aRVW4Utx00qRnyPmOP');

const CarritoIndexPage = () => {

    const [optionsStripe] = useState<any>({
        mode: 'payment',
        amount: 1099,
        currency: 'mxn',
        appearance: {
        },
    })

    return (
        <Elements stripe={stripePromise} options={optionsStripe}>
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