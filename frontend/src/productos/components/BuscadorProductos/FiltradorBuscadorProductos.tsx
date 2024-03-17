import FilterDisplay from "./FilterDisplay"

const FiltradorBuscadorProductos = () => {
    return (
        <div
            className="w-full p-6 py-4 bg-blue-50/50 border border-gray-200 rounded-lg shado mb-5 flex items-center justify-between"
        >
            <div className="flex items-center">
                <div className="flex items-center mr-3">
                    <label className="font-bold mr-3">Categoria</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <label className="font-bold mr-3">Categoria</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>
            <div>
                <FilterDisplay />
            </div>
        </div>
    )
}

export default FiltradorBuscadorProductos