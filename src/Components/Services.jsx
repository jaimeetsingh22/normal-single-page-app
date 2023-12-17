import React from 'react'
import { Carousel } from 'react-responsive-carousel'
// carausel ek predefined css library h jo ki page ki styling ko asan kar deta hai basically ek ui provide karta hai
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'
const Services = () => {
    return (
        <div className='services'>
            <Carousel 
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            interval={1000}
            showThumbs={false}
            // showIndicators={false}
            >
                <div>
                <img src={img1} alt="no image" />
                <p className='legend'>Full stack</p>
                </div>
                <div>
                <img src={img2} alt="no image" />
                <p className='legend'>Frontend development</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Services