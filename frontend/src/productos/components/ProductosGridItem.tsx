import type { Producto } from '../types/productos.types'
import React, { type FC } from 'react'

type ConfigProps = {
    tipo: 'primary' | 'secondary'
}

type Props = ConfigProps & {
    producto: Producto
}

const ProductoGridItem: FC<Props> = ({
    producto,
    tipo = 'primary'
}) => {

    const {
        codigo,
        titulo,
        // descripcion,
        precio,
        id,
        imagen
    } = producto

    function formatarComoMonedaMexicana(valor: number): string {
        // Opciones de formato para moneda mexicana
        const opcionesDeFormato: Intl.NumberFormatOptions = {
            style: 'currency',
            currency: 'MXN'
        };

        // Formatear el número como moneda mexicana
        const valorFormateado = valor.toLocaleString('es-MX', opcionesDeFormato);

        return valorFormateado;
    }

    const manejarErrorDeCarga = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        // Cambiar la fuente de la imagen alternativa en caso de error de carga
        const target = event.target as HTMLImageElement;
        target.src = '/Images/no_image_producto.jpg';
    };

    return (
        <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={`/producto/${id}`}>
                <img
                    className={`p-8 rounded-t-lg ${tipo === 'primary' ? 'h-48' : 'h-60'} mx-auto`}
                    src={imagen}
                    alt={`${producto.descripcion} | Alibabeto`}
                    onError={manejarErrorDeCarga}
                    loading='lazy'
                />
            </a>
            <div className="px-5 pb-5">
                <a>
                    <p className='opacity-50 text-xs'>
                        {
                            codigo
                        }
                    </p>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {
                            titulo
                        }
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
                </div>
                {
                    tipo === 'primary'
                    &&
                    <div className="flex items-start justify-between flex-col">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            {formatarComoMonedaMexicana(precio)}
                        </span>
                        <a
                            href={`/producto/${id}`}
                            className={`block  ${tipo === 'primary' ? 'bg-alibabeto-1 text-white' : 'transparent text-alibabeto-1'} w-full mt-3 font-medium rounded-md text-xs px-5 py-2.5 text-center`}
                        >
                            Comprar
                        </a>
                    </div>
                }
            </div>
        </div>

    )
}

export default ProductoGridItem