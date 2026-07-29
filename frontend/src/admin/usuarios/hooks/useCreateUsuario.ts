/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthAxios } from '../../../global/api/AuthAxios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react'
import Swal from 'sweetalert2';

type InputsCreateUsuario = {
    nombre: string
    apellidos: string
    correo: string
    rolID: number
    password: string
}

const useCreateUsuario = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm<InputsCreateUsuario>();
    const [ isLoading , setLoading ] = useState(false)

    const onSubmit: SubmitHandler<InputsCreateUsuario> = async ( _payload ) => {

        try {
            
            if( isLoading ) return

            setLoading(true)
            
            const payload = {
                ..._payload,
                Imagen: "123"
                // categoriaID: Number(_payload.categoriaID),
                // existencias: Number(_payload.existencias),
            }

            await AuthAxios.post('/usuario/create', payload)
            
            setLoading(false)

            await Swal.fire({
                title: 'Usuario creado correctamente',
                icon: 'success',
                confirmButtonText: 'Ok'
            })

            window.location.href = '/admin/usuarios'

        } 
        catch (error:any) 
        {
            setLoading(false)
            if( error?.response?.data?.msg )
            {
                const msg = error?.response?.data?.msg
                return await Swal.fire({
                    title: msg,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }

            await Swal.fire({
                title: 'Error al crear el usuario',
                icon: 'error',
                confirmButtonText: 'Ok'
            })

        }

    }

    const submit = handleSubmit(onSubmit)

    return {
        errors,
        submit,
        register,
        isLoading,
    }
}

export default useCreateUsuario