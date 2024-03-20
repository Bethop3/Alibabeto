/* eslint-disable @typescript-eslint/no-explicit-any */
import { CarritoContext } from "../context/CarritoContext"
import Button from "../../global/components/Button"
import { useContext } from "react"
import { CardElement, PaymentElement } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('pk_test_51OwOXeBLBF0dttMQtVfyklMPuP2gFw1xddFySA3DElUfeFUJJ3Miw81vPIfK9NJBP473EViZHhVcWcY4aRVW4Utx00qRnyPmOP');

const CuentaTotal = () => {

    const {
        iva,
        total,
        importe,
        isLoading,
        handleSubmitCarrito,
    } = useContext(CarritoContext)!

    // const options: any = {
    //     mode: 'payment',
    //     amount: 1099,
    //     currency: 'mxn',
    //     // Fully customizable with appearance API.
    //     appearance: {
    //         /*...*/
    //     },
    // };

    return (
        <article className="item-card border rounded-lg w-full md:w-[30%] h-max p-4">


            <h3 className="font-bold text-2xl">Total</h3>
            <hr className="mt-3 mb-3 block" />
            <p className="mb-3">
                <strong className="flex items-start justify-between">
                    <span>Importe:</span>
                    <span> {importe} </span>
                </strong>
            </p>
            <p className="mb-3">
                <strong className="flex items-start justify-between">
                    <span>IVA:</span>
                    <span> {iva} </span>
                </strong>
            </p>
            <p>
                <strong className="flex items-start justify-between">
                    <span>Total:</span>
                    <span> {total} </span>
                </strong>
            </p>
            <hr className="mt-3 mb-3" />

            {/* <PaymentElement /> */}
            <CardElement />

            <Button
                onClick={handleSubmitCarrito}
                isLoading={isLoading}
                text="Pagar"
                className="mt-3"
            />

            <div className="mt-3">
                <p className="font-semibold opacity-70 text-gray-500">Aceptamos</p>
                <img
                    className="w-2/4"
                    src="https://www.classltd.com/wp-content/uploads/2021/09/class-payments.png"
                    alt=""
                />
            </div>
        </article>
    )
}

export default CuentaTotal