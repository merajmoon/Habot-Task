import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import Suppliers from '../Components/Suppliers'
import Works from '../Components/works'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Suppliers />
            <Works />
        </>
    )
}

export default Home