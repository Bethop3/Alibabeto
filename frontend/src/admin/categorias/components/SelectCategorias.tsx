/* eslint-disable @typescript-eslint/no-explicit-any */
import useCategorias from "../hooks/useCategorias";
import { forwardRef } from "react";

const SelectCategorias = forwardRef(({ onChange, onBlur, name, label }: any, ref: any) => {

    const { categorias } = useCategorias()

    return (
        <>
            <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                {label}
            </label>
            <select name={name} ref={ref} onChange={onChange} onBlur={onBlur} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {
                    categorias.map(categoria => (
                        <option value={categoria.id} key={categoria.id}>
                            {categoria.nombre}
                        </option>
                    ))
                }
            </select>
        </>
    )
});

// const SelectCategorias = () => {

//     const { categorias } = useCategorias()

//     return (
//         <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//             {
//                 categorias.map(categoria => (
//                     <option key={categoria.id}>
//                         {categoria.nombre}
//                     </option>
//                 ))
//             }
//         </select>
//     )
// }

export default SelectCategorias