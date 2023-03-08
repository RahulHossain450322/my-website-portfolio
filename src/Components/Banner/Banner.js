import React from 'react'

import BannerStyle from './Banner.css'
import BannerIamge from './BannerImage/ei_1677508904869-removebg.png'

import { AiOutlineDownload } from "react-icons/ai";

function Banner() {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner_content d-flex justify-content-between'>
            <div className='banner_content_title'>
                <h2 className='banner_title'>
                    I am <span className='h1 text-danger'>Rahul Hossain</span><br/>
                    <span className='h1'>Web Developer</span>
                </h2>
                <p className='banner_des'>
                    Et elitr sanctus et rebum ut
                     elitr lorem.<br/>
                      Magna et diam ea
                      dolores dolore eirmod aliquyam 
                      rebum.<br/>
                       Sea vero sanctus eirmod 
                      lorem. Kasd sit takimata sea dolor
                       eos, sit est.
                </p>
                <div className='banner_btn'>
                    <button className='btn btn-outline-primary'>Download CV <AiOutlineDownload className='download_icon' /></button>
                </div>
            </div>
            <div className='banner_image'>
                <div className='banner_image_single'>
                    <img className='img-fluid' src={BannerIamge} alt='Banner Images' />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
