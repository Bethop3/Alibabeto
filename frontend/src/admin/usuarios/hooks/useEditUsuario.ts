/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import { useLoading } from '../../../global/hooks/useLoading';
import { AuthAxios } from '../../../global/api/AuthAxios';
import { BasicResponse } from '../../../types';
import { Usuario } from '../types/usuario.types';

type InputsEditUsuario = {
    id: number
    nombre: string
    apellidos: string
    correo: string
    RolID: number
    password: string
}

const useEditUsuario = () => {

    const { register, formState: { errors }, watch, setValue, handleSubmit } = useForm<InputsEditUsuario>();
    const { id } = useParams();
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const { isLoading, setIsLoading } = useLoading()

    const formData = watch();

    useEffect(() => {

        handleGetUsuarioPorID()

    }, [id])

    const handleGetUsuarioPorID = async () => {

        try {

            setIsLoading(true)

            const { data: { data } } = await AuthAxios.get<BasicResponse<Usuario>>(`/usuario/findone/${id}`)

            setUsuario(data)

            Object.keys(data!).forEach((key :any)=> {
                // Actualiza el valor del campo correspondiente con setValue
                const val = data[key as keyof Usuario]; // Aserción de tipo
                setValue(key, val);
            });

            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setUsuario(null)
        }

    }

    const onSubmit = async () => {

        try {

            const payload = {
                ...formData,
            }

            await AuthAxios.put(`/usuario/edit`, payload)

            await Swal.fire({
                icon: 'success',
                title: "Usuario actualizado"
            })

        } catch (error) {
            console.error(error)
            await Swal.fire({
                icon: 'error',
                title: "Error al actualizar el Usuario"
            })
        }
    }

    return {
        usuario,
        submit: handleSubmit(onSubmit),
        isLoading,
        register,
        errors
    }
}

export default useEditUsuario