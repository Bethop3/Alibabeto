/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthAxios } from '../../global/api/AuthAxios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { AxiosError } from 'axios'
import { BasicResponse } from '../../types'

type State = {
    nombreUsuario: string
    apellidos: string
    password: string
    correo: string
    nombre: string
}

const useRegister = () => {

    const [ isLoading , setLoading ] = useState(false)

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors , touchedFields , isSubmitted },
    } = useForm<State>()


    const onSubmit: SubmitHandler<State> = async (data) => {

        try {

            if( isLoading ) return
            
            setLoading(true)
            
            await AuthAxios.post('/auth/registro', {
                ...data,
                nombreUsuario: "123",
                Imagen: '123'
            })
            
            await Swal.fire({
                title: "Registrado correctamente",
                icon: "success"
            })
            
        } catch (error) {
            const errorAxios = error as AxiosError<BasicResponse<any>>
            const hasMsg = errorAxios.response?.data?.msg
            if( hasMsg )
            {
                await Swal.fire({
                    title: hasMsg ,
                    icon: "error"
                })
                return
            }
            await Swal.fire({
                title: "Error al registrar el usuario",
                icon: "error"
            })
        }
        finally
        {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setLoading(false)
        }

    }

    const submit = handleSubmit(onSubmit)

    return {
        isSubmitted,
        touchedFields,
        isLoading,
        register,
        errors,
        submit
    }
}

export default useRegister