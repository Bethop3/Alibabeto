/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthAxios } from '../../../global/api/AuthAxios';
import { BasicResponse } from '../../../types';
import { Categoria } from '../types/categoria.type';

const EditCategoriaPage = () => {
    const { id } = useParams(); // Obtener el ID de la categoría de los parámetros de la URL

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Función asincrónica para obtener los detalles de la categoría por su ID
        const fetchCategoria = async () => {
            try {

                const response = await AuthAxios.get<BasicResponse<Categoria>>(`/categoria/find/${id}`);

                const categoria = response.data;
                debugger
                // Setear los valores obtenidos en los campos del formulario
                setValue('nombre', categoria.data.nombre);
            } catch (error) {
                console.error('Error al obtener la categoría:', error);
            }
            // debugger
        };
        fetchCategoria(); // Llamar a la función para obtener la categoría al cargar el componente
    }, [id, setValue]);

    const onSubmit = async (data: any) => {

        setIsLoading(true);
        try {
            // debugger
            await AuthAxios.put(`/categoria/edit`, {
                ...data, id
            }); // Llamar a la función de la API para actualizar la categoría
            window.location.href = '/admin/categorias';

            // Redirigir a la página de lista de categorías después de actualizar la categoría
        } catch (error) {
            console.error('Error al actualizar la categoría:', error);
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
                        {isLoading ? 'Actualizando...' : 'Actualizar Categoría'}
                    </button>
                </form>
            </div>
        </Fragment>
    );
};

export default EditCategoriaPage;
