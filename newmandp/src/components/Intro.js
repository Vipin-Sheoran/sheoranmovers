import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Intro() {
    return (
        <div className='intro-bg'>
            <Carousel autoPlay={true} infiniteLoop={true} autoFocus={true} showStatus={false} axis='vertical' showThumbs={false} showIndicators={false}>
                <div>
                <img className='' src='https://as2.ftcdn.net/v2/jpg/02/10/48/81/1000_F_210488148_aRbffJ0sRkHJ5gpxoCZuhwUS8jqJskHJ.jpg'></img>
                <div className='absolute top-8 mx-2'> 
                <p className='bg-red-900 bg-opacity-80 font-bold text-white p-2 my-2 uppercase w-auto'>household relocation</p>
                <p className='bg-black text-white bg-opacity-50'>Household shifting a comfortable and hassle free process by our household shifting service.</p>
                <button className='uppercase m-2 border-blue-900 border-2 font-semibold text-white'>know more</button>
                </div>
               
                </div>
                <div>
                <img src='https://as2.ftcdn.net/v2/jpg/02/91/23/43/1000_F_291234347_tjEDFlrjJ8BhzgCTN4AdAjgixJ4v97vt.jpg'></img>
                <div className='absolute top-4 mx-2 '>
                <p className='bg-red-900 bg-opacity-80 font-bold text-white p-2 my-2 uppercase w-auto'>corporate relocation</p>
                <p className='bg-black text-white bg-opacity-50'>Office shifting requires lots of planning as you have to ensure minimum loss in productivity and service offerings.</p>
                <button className='uppercase m-2 border-blue-900 border-2 font-semibold text-white'>know more</button>
                </div>
               
                </div>

                <div>
                <img src='https://as2.ftcdn.net/v2/jpg/02/10/48/81/1000_F_210488148_aRbffJ0sRkHJ5gpxoCZuhwUS8jqJskHJ.jpg'></img>
                <div className='absolute top-4 mx-2'> 
                <p className='bg-red-900 bg-opacity-80 font-bold text-white p-2 my-2 uppercase w-auto'>loading & unloading</p>
                <p className='bg-black text-white bg-opacity-50'>Household shifting a comfortable and hassle free process by our household shifting service.</p>
                <button className='uppercase m-2 border-blue-900 border-2 font-semibold text-white'>know more</button>
                </div>
               
                </div>
            
            
            </Carousel>
        </div>
    )
}

export default Intro
