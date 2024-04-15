/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from 'react';

import { useForm } from 'react-hook-form';
import { AuthAxios } from '../../../global/api/AuthAxios';

const CreateCategoriaPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            // debugger
            await AuthAxios.post('/categoria/create', data)
            window.location.href = '/admin/categorias/'
            // Llamar a la función de la API para crear la categoría
        } catch (error) {
            console.error('Error al crear la categoría:', error);
            setIsLoading(false);

        }
    };

    return (
        <Fragment>
            <div className="rounded-lg mx-auto bg-white max-w-[60%] border p-5">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="grid gap-6 mb-6 lg:grid-cols-1">
                        <div>
                            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                className={`
                                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                                        ${isLoading && 'opacity-50'}
                                        ${errors.nombre ? 'bg-red-50 border border-red-500 text-red-500' : 'border-gray-300 bg-gray-50'}
                                    `}
                                placeholder="Nombre de la categoría"
                                {...register("nombre", {
                                    required: {
                                        value: true,
                                        message: 'El campo nombre es requerido'
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: 'El nombre debe tener menos de 100 caracteres'
                                    }
                                })}
                            />
                            {errors.nombre && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.nombre.message}</p>}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2.5 text-white bg-blue-600 border border-gray-200 rounded-lg"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creando...' : 'Crear Categoría'}
                    </button>
                </form>
            </div>
        </Fragment>
    );
};

export default CreateCategoriaPage;
