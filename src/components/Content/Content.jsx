import React from 'react'
import './Content.css'
import { Link } from 'react-router-dom'
import { FaHistory, FaCrown, FaMoneyCheck, FaArrowRight  } from 'react-icons/fa'

const Content = () => {
    return (
        <>
            <div className='intro'>
                <p>Descubre nuestra amplia gama de productos de limpieza y perfumería que combinan eficacia y frescura, diseñados para tu bienestar.</p>
                <img className='banner' src="/hogar.jpg" alt="" />
            </div>
            <figure className='divider'></figure>
            <div className='circles'>
                <div className='iconContainer'>
                    <figure className='icon'>
                        <FaHistory color='#fff' size={30} />
                    </figure>
                    <p>Contamos con más de 68 años de experiencia brindando lo mejor a nuestros clientes.</p>
                </div>
                <div className='iconContainer'>
                    <figure className='icon'>
                        <FaCrown color='#fff' size={30} />
                    </figure>
                    <p>La excelencia en nuestros productos es nuestra mayor distinción.</p>
                </div>
                <div className='iconContainer'>
                    <figure className='icon'>
                        <FaMoneyCheck color='#fff' size={30} />
                    </figure>
                    <p>Ofrecemos la comodidad de aceptar todos los métodos de pago.</p>
                </div>
            </div>
            <figure className='divider'></figure>
            <h2>Nosotros</h2>
            <figure className='divider ch'></figure>
            <section className='aboutUs' id='aboutus'>
                <p>En Tienda Vilma, creemos que un hogar limpio y bien cuidado es la base para una vida plena y armoniosa.</p>
                <p>Desde 1956, nos hemos dedicado a ofrecer productos de limpieza efectivos y fragancias únicas que transforman cada rincón de tu hogar en un espacio acogedor.</p>
                <p>Nuestra misión es combinar calidad, accesibilidad y cuidado en cada uno de nuestros productos, para que no solo limpien, sino que también aporten frescura y bienestar. Ya sea que busques un detergente para una limpieza profunda o un perfume que deje una huella especial, aquí encontrarás exactamente lo que necesitas.</p>
                <p>Con un compromiso constante hacia la excelencia y el servicio al cliente, nos esforzamos por ser tu mejor aliado en el cuidado de tu hogar y en los pequeños detalles que marcan la diferencia.</p>
                <p>Porque tu hogar merece lo mejor, y nosotros estamos aquí para ofrecerlo.</p>
            </section>
            <Link to="/products">
                <button>
                    <p>Ver nuestros productos destacados <FaArrowRight size={20} /></p>
                </button>
            </Link>
        </>
    )
}

export default Content