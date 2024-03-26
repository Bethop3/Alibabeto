/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../../global/components/Button"
import SelectCategorias from "../../categorias/components/SelectCategorias"
import CarouselImagenes from "../components/CarouselImagenes";
import useProductoEdit from "../hooks/useProductoEdit"
import ReactImageUploading from "react-images-uploading";
const AdminProductoEditPorIdPage = () => {

    const {
        register,
        isLoading,
        errors,
        // producto,
        handleSubmit,
        formData,
        onChangeImages,
        handleRemoveImage,
        imagenesSeleccionadas
    } = useProductoEdit()

    const maxNumber = 10;

    return (
        <>
            <div className="rounded-lg mx-auto bg-white max-w-[60%] border p-5">
                <form onSubmit={handleSubmit} noValidate>
                    {/* <pre>
                        {
                            JSON.stringify(producto, null, 3)
                        }
                    </pre> */}
                    {/* <form noValidate> */}
                    <div className="grid gap-6 mb-6 lg:grid-cols-1">

                        <article className="grid md:grid-cols-2 md:gap-6">

                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Codigo
                                </label>
                                <input
                                    type="text"
                                    className={`
                                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                                        ${isLoading && 'opacity-50'}
                                        ${errors.codigo
                                            ? 'bg-red-50 border border-red-500 text-red-500'
                                            : 'border-gray-300 bg-gray-50'}
                                        `}
                                    placeholder="CELULAR"
                                    // name='codigo'
                                    // value={formState.codigo}
                                    // onChange={onInputChange}
                                    {
                                    ...register("codigo", {
                                        // disabled: isLoading,
                                        required: {
                                            value: true,
                                            message: 'El campo codigo es requerido'
                                        },
                                        maxLength: 100,
                                        minLength: {
                                            message: 'El codigo debe ser un campo valido',
                                            value: 1
                                        }
                                    })}
                                />

                                {
                                    errors.codigo &&
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.codigo.message
                                        }
                                    </p>
                                }

                            </div>

                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Titulo
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className={`
                                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                                        ${errors.titulo
                                            ? 'bg-red-50 border border-red-500 text-red-500'
                                            : 'border-gray-300 bg-gray-50'}
                                        `}
                                    // name='codigo'
                                    // value={formState.codigo}
                                    // onChange={onInputChange}
                                    {...register("titulo", {
                                        required: {
                                            value: true,
                                            message: 'El campo titulo es requerido'
                                        },
                                        maxLength: 100,
                                        minLength: {
                                            message: 'El codigo debe ser un campo valido',
                                            value: 1
                                        }
                                    })}
                                />

                                {
                                    errors.titulo &&
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.titulo.message
                                        }
                                    </p>
                                }

                            </div>

                        </article>

                        <article className="grid md:grid-cols-2 md:gap-6">
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Descripcion
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className={`
                                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                                        ${errors.titulo
                                            ? 'bg-red-50 border border-red-500 text-red-500'
                                            : 'border-gray-300 bg-gray-50'}
                                        `}
                                    placeholder="Iphone 15 Pro MAX"
                                    // name='descripcion'
                                    // value={formState.descripcion}
                                    // onChange={onInputChange}
                                    // value={formData.descripcion}
                                    {...register("descripcion", {
                                        required: {
                                            value: true,
                                            message: 'El campo descripcion es requerido'
                                        },
                                        maxLength: 1000,
                                        minLength: {
                                            message: 'El codigo debe ser un campo valido',
                                            value: 1
                                        }
                                    })}
                                />

                                {
                                    errors.descripcion &&
                                    <p className="mt-2 mb-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.descripcion.message
                                        }
                                    </p>
                                }

                            </div>
                            <div>
                                <label
                                    htmlFor="company"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Precio
                                </label>
                                <input
                                    type="number"
                                    className={`
                                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                                        ${errors.precio
                                            ? 'bg-red-50 border border-red-500 text-red-500'
                                            : 'border-gray-300 bg-gray-50'}
                                        `}
                                    placeholder="$1.00"
                                    // name='precio'
                                    // value={formState.precio}
                                    // onChange={onInputChange}
                                    {...register("precio", {
                                        required: {
                                            value: true,
                                            message: 'El campo precio es requerido'
                                        },
                                        pattern: {
                                            value: /^[0-9]+(\.[0-9]+)?$/,
                                            message: 'Ingrese solo números'
                                        }
                                    })}
                                />

                                {
                                    errors.precio &&
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.precio.message
                                        }
                                    </p>
                                }

                            </div>
                        </article>

                        <article className="grid md:grid-cols-2 md:gap-6">
                            <div>
                                <label
                                    htmlFor="company"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Existencias
                                </label>
                                <input
                                    type="number"
                                    className={`
                                        border text-gray-900 text-sm rounded-lg block w-full p-2.5 
                                        ${errors.existencias
                                            ? 'bg-red-50 border border-red-500 text-red-500'
                                            : 'border-gray-300 bg-gray-50'}
                                        `}
                                    placeholder="0"
                                    required={false}
                                    formNoValidate
                                    // name='existencias'
                                    // value={formState.existencias}
                                    // onChange={onInputChange}
                                    {...register("existencias", {
                                        required: {
                                            value: true,
                                            message: 'El campo existencias es requerido'
                                        },
                                        pattern: {
                                            value: /^[0-9]*$/,
                                            message: 'Ingrese solo números enteros'
                                        }
                                    })}
                                />

                                {
                                    errors.existencias &&
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.existencias.message
                                        }
                                    </p>
                                }
                            </div>
                            <div>
                                {/* <label
                                    htmlFor="company"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Categoria
                                </label> */}

                                <SelectCategorias
                                    label="Categoria"
                                    {...register("categoriaID")}
                                // register={ }
                                />

                                {
                                    errors.existencias &&
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {
                                            errors.existencias.message
                                        }
                                    </p>
                                }
                            </div>
                        </article>

                        <hr />

                        <article className='grid md:grid-cols-2 md:gap-6'>
                            <div>
                                <ReactImageUploading
                                    multiple
                                    value={imagenesSeleccionadas}
                                    onChange={onChangeImages}
                                    maxNumber={maxNumber}
                                    dataURLKey="data_url"
                                >
                                    {({
                                        onImageUpload,
                                        isDragging,
                                        dragProps,
                                    }) => (
                                        <div className="upload__image-wrapper">

                                            <button
                                                style={isDragging ? { color: 'red' } : undefined}
                                                type='button'
                                                onClick={onImageUpload}
                                                {...dragProps}
                                                className='w-full p-2.5 text-white bg-blue-600 border border-gray-200 rounded-lg'
                                            >
                                                Selecciona una imagen para el producto
                                            </button>

                                            <div className="grid grid-cols-3 gap-3 mt-9 gap-x-10 gap-y-7">
                                                {imagenesSeleccionadas.map((image: any, index: any) => (
                                                    <div key={index} className="image-item relative">
                                                        <img
                                                            src={image['data_url'] ?? image['url']}
                                                            alt=""
                                                            className="w-full max-h-[120px] object-contain"
                                                        />
                                                        <div className="image-item__btn-wrapper -top-3 -right-3 absolute">
                                                            <button
                                                                onClick={() => handleRemoveImage(index)}
                                                                className='px-2.5 py-0.5 rounded-lg bg-red-600 text-white font-semibold'
                                                                type="button"
                                                            >x</button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>



                                        </div>
                                    )}
                                </ReactImageUploading>
                            </div>
                            <div>
                                <CarouselImagenes
                                    imagenes={imagenesSeleccionadas}
                                />
                            </div>
                            {/* <div>
                                {images.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image['data_url']} alt="" width="100" />
                                        <div className="image-item__btn-wrapper">
                                            <button
                                                className='p-2 px-5 rounded-lg bg-red-600/80 text-white font-semibold'
                                                type="button"
                                            >Eliminar</button>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </article>

                    </div>

                    <Button
                        isLoading={isLoading}
                    >
                        Actualizar
                    </Button>

                </form>

            </div >
        </>
    )
}

export default AdminProductoEditPorIdPage