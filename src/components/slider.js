import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img3.png'
import img2 from '../assets/img1.png'
import img3 from '../assets/fondo2.gif'
import img from '../assets/img4.jpg'


const slider = () => {
    return (
        <>
            <Carousel className='main-slide'>
                <div>
                    <img src={img} height='300px' width='250px' />
                </div>
                <div>
                    <img src={img3} height='300px' width='250px' />
                </div>
            </Carousel>
        </>
    )
}

export default slider