// import React from 'react'
// import ProductosSection from '../components/sections/Productos.section.astro'
// import GlobalStyles from "../components/GlobalStyles.astro"
// import MetodosPago1 from '../components/MetodosPago1.astro'
// import Banner1 from '../components/banners/Banner1.astro'
// import MetodosPago from '../components/MetodosPago.astro'
// import Newsletter from '../components/react/Newsletter'
// import Container from '../components/Container.astro'
// import NavBar from "../components/NavBar.astro"
// import Footer from "../components/Footer.astro"
// import Bento2 from '../components/Bento2.astro'
// import Bento from '../components/Bento.astro'
// import Hero from "../components/Hero.astro"
import Bento from '../components/Bento'
import Bento2 from '../components/Bento2'
import Marcas from '../components/Marcas'
import Slider from '../components/Slider'

const IndexPage = () => {
    return (
        <>
            <Slider />
            <Marcas />
            <Bento />
            <Bento2 />
        </>
    )
}

export default IndexPage