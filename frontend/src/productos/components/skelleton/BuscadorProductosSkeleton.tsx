import { BuscadorProductosContext } from '../../context/BuscadorProductosContext'
import CardProductoSkeleton from './CardProductoSkeleton'
import { useContext } from 'react'

const BuscadorProductosSkeleton = () => {

    const { displayInfo } = useContext(BuscadorProductosContext)!

    return (
        <section className="grid custom-grid item-grid gap-4">

            <div>
                <article
                    className={`
                    grid grid-cols-1 animate-pulse md:grid-cols-5 lg:grid-cols-5 ${displayInfo.display === 'grid' ? 'xl:grid-cols-4' : 'xl:grid-cols-1'} gap-5 item-grid p- bg-white  border-gray-200 rounded-lg
                `}
                >
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                    <CardProductoSkeleton />
                </article>

            </div>

        </section>
    )
}

export default BuscadorProductosSkeleton