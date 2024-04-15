
const ProductoCarritoItemSkeleton = () => {
    return (
        <article
            className={
                `item-card animate-pulse grid grid-cols-1 md:grid-cols-4 p-4 gap-3 grid-columna border border-b-gray-200 border-r-0 border-l-0 border-b-0
        `
            }
        >
            <div className="col flex w-full md:flex-row items-start md:items-center font-bold gap-x-2">
                <div className="w-full h-5 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                <p className="flex flex-col">
                    <div className="w-full h-5 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                </p>
            </div>
            <div className="col font-bold flex items-center">
                <div className="w-full h-5 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
            </div>
            <div className="col font-bold flex items-center">
                <div className="w-full h-5 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
            </div>
            <div className="col font-bold flex items-center">
                <div className="w-full h-5 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                {/* <button disabled={isLoading} className={
                    `${isLoading ? "opacity-40" : ""}`
                } onClick={handleDelete}>
                    <svg
                        className="w-6 h-6 text-red-500 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button> */}
            </div>
        </article>
    )
}

export default ProductoCarritoItemSkeleton