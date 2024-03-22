/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react"

const RefoundIcon = () => (
    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M14.516 6.743c-.41-.368-.443-1-.077-1.41a.99.99 0 0 1 1.405-.078l5.487 4.948.007.006A2.047 2.047 0 0 1 22 11.721a2.06 2.06 0 0 1-.662 1.51l-5.584 5.09a.99.99 0 0 1-1.404-.07 1.003 1.003 0 0 1 .068-1.412l5.578-5.082a.05.05 0 0 0 .015-.036.051.051 0 0 0-.015-.036l-5.48-4.942Zm-6.543 9.199v-.42a4.168 4.168 0 0 0-2.715 2.415c-.154.382-.44.695-.806.88a1.683 1.683 0 0 1-2.167-.571 1.705 1.705 0 0 1-.279-1.092V15.88c0-3.77 2.526-7.039 5.967-7.573V7.57a1.957 1.957 0 0 1 .993-1.838 1.931 1.931 0 0 1 2.153.184l5.08 4.248a.646.646 0 0 1 .012.011l.011.01a2.098 2.098 0 0 1 .703 1.57 2.108 2.108 0 0 1-.726 1.59l-5.08 4.25a1.933 1.933 0 0 1-2.929-.614 1.957 1.957 0 0 1-.217-1.04Z" clip-rule="evenodd" />
    </svg>

)
const ClockIcon = () => (
    <svg className="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
    </svg>
)

const SendIcon = () => (
    <svg className="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M5 4a2 2 0 0 0-2 2v1h10.968l-1.9-2.28A2 2 0 0 0 10.532 4H5ZM3 19V9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm11.707-7.707a1 1 0 0 0-1.414 1.414l.293.293H8a1 1 0 1 0 0 2h5.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2Z" clip-rule="evenodd" />
    </svg>

)

const CheckIcon = ({ id }: any) => {

    if (id === 1) return <ClockIcon />;

    if (id === 2) return <RefoundIcon />

    if (id === 3) return <SendIcon />

    return <p>Nada</p>

}

const EstadoPedidoLabel = ({ estadoPedido }: any) => {

    const [classes, sertClasses] = useState('')
    useEffect(() => {

        handleCheckStatus()

    }, [])

    const handleCheckStatus = () => {

        if (estadoPedido?.id === 1) {
            sertClasses('bg-yellow-400 text-white')
        }
        if (estadoPedido?.id === 2) {
            sertClasses('bg-red-400 text-white')
        }
        if (estadoPedido?.id === 3) {
            sertClasses('bg-blue-400 text-white')
        }
    }

    // const Icon = checkIcon(estadoPedido?.id)

    return (
        <div className={`inline-flex items-center px-3 py-1 font-bold rounded-full gap-x-2 ${classes}`}>
            <CheckIcon
                id={estadoPedido?.id}
            />
            <h2 className="text-sm font-normal">
                {estadoPedido?.nombre}
            </h2>
        </div>
    )
}

export default EstadoPedidoLabel