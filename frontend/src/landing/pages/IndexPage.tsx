import Banner from '../components/Banner'
import Bento from '../components/Bento'
import Bento2 from '../components/Bento2'
import Marcas from '../components/Marcas'
import MetodosPago from '../components/MetodosPago'
import Newsletter from '../components/Newsletter'
import ProductosSection from '../components/ProductosSection'
import Slider from '../components/Slider'

const IndexPage = () => {
    return (
        <>
            <Slider />
            <Marcas />
            <Bento />
            <ProductosSection
                idCategoria={4}
                titulo="Celulares"
            />
            <Bento2 />
            <ProductosSection
                idCategoria={5}
                titulo="Laptops"
            />
            <Banner />
            <ProductosSection
                idCategoria={7}
                titulo="Audifonos"
            />
            <MetodosPago />
            <Newsletter />
        </>
    )
}

export default IndexPage