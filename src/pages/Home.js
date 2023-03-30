import React from 'react'
import Style from "./index.module.css"
import Slider from '../components/slider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import icon from '../assets/search.svg'
import P1 from '../assets/comprar.svg';
import P2 from '../assets/envio.svg';
import P3 from '../assets/seguridad.svg';
import face from '../assets/face.svg'
import twitter from '../assets/twitter.svg'

import Product from "../components/Product";
import { productData, responsive } from "../components/data";

const handleScrollDown = () => {
  window.scrollTo({
    top: window.innerHeight * 1.2,
    behavior: 'smooth'
  });
}
const product = productData.map((item) => (
  <Product
    name={item.name}
    url={item.imageurl}
    price={item.price}
    description={item.description}
  />
));

const Home = () => {
  return (
    <>
      <div className={Style.contenedor}>
        <h1 className={Style.titulo}>Softclothes</h1>
        <div className={Style.text}>Tu tienda de ropa, a tu medida y gustos.</div>

        <div class="search-box">
          <button class="btn-search"><i> <img src={icon} height='30' width='30'></img> </i></button>
          <input type="text" class="input-search" placeholder="Escriba." />
        </div>

        <button class="button-74" role="button" onClick={handleScrollDown}>
          Comenzar
        </button>
      </div>



      <div className='content2'>
        <div className='titulo2'> B i e n v e n i d o </div>
        <Slider />


        <div className='titulo2'>Productos populares</div>
        <Carousel showDots={true} responsive={responsive}>
          {product}
        </Carousel>


        <div className='titulo2'></div>
        <div className="cont">

          <div className="parte-1">
            <img src={P1} alt="Mi imagen SVG 1" className='img2' />
            <h2 className='subtit'>Elige cómo pagar</h2>
            <p className='detail'>Contamos con muchos medios de pago electrónico.</p>
          </div>

          <div className="parte-2">
            <img src={P2} alt="Mi imagen SVG 2" className='img2' />
            <h2 className='subtit'>Envío gratis desde $ 299</h2>
            <p className='detail'>Tienes envío gratis en millones de productos seleccionados</p>
          </div>

          <div className="parte-3">
            <img src={P3} alt="Mi imagen SVG 3" className='img2' />
            <h2 className='subtit'>Seguridad, de principio a fin</h2>
            <p className='detail'>¿No te gusta? ¡Devuélvelo! En Softclothes, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
          </div>
        </div>
      </div>

      <div className='footer'>
        <footer class="footer-distributed">
          <div class="footer-left">

            <h3>Softclothes<span></span></h3>
            <p class="footer-links">
              <a href="#">Inicio </a>
              -
              <a href="#"> Sobre nosotros </a>
              -
              <a href="#">Faq</a>   
            </p>

            <p class="footer-company-name">R&R Software © 2023</p>

            <div class="footer-icons">

              <a href="#"><i><img src={face} height='30' width='30'></img></i></a>
              <a href="#"><i><img src={twitter} height='30' width='30'></img></i></a>

            </div>
          </div>

          <div class="footer-right">
            <p>¡Contáctanos!</p>
            <form action="#" method="post">
              <input type="text" name="email" placeholder="Correo electrónico" />
              <textarea name="message" placeholder="Mensaje"></textarea>
              <button>Enviar</button>
            </form>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home



