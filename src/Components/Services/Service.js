import React from 'react'
import ServiceStyle from './Service.css'

import { GiUnfriendlyFire } from 'react-icons/gi';
import { MdOutlineBrandingWatermark } from 'react-icons/md';
import { SiAffinitydesigner } from 'react-icons/si';
import { BiPaperPlane } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';


function Service() {
  return (
    <section className='service'>
      <div className='container'>
        <div className='service_content'>
            <div className='service_details'>
                <h1 className='service_title text-center mb-3'>
                    Professional Web Development Service
                </h1>
                <p className='service_des text-center mb-3'>
                    Consetetur justo sea dolores dolor duo erat. Invidunt justo vero nonumy stet at ipsum. Justo eos lorem nonumy nonumy diam tempor dolores stet, eos magna et clita rebum. Ea sed et diam sed takimata ipsum elitr eirmod, et sanctus sanctus no aliquyam erat et justo, lorem amet diam accusam et.
                </p>
            </div>
            <div className='service_card'>
                <div className='single_service card card-body'>
                    <GiUnfriendlyFire className='card-icon mx-auto' />
                    <h3 className='card-title'>ECO FRIENDLY</h3>
                </div>
                <div className='single_service card card-body'>
                    <MdOutlineBrandingWatermark className='card-icon mx-auto'/>
                    <h3 className='card-title'>QUALITY</h3>
                </div>
                <div className='single_service card card-body'>
                    <SiAffinitydesigner className='card-icon mx-auto'/>
                    <h3 className='card-title'>DESIGN</h3>
                </div>
                <div className='single_service card card-body'>
                    <BiPaperPlane className='card-icon mx-auto'/>
                    <h3 className='card-title'>CREATIVITY</h3>
                </div>
            </div>
            <div className='contact_button mt-4'>
            <NavLink to='/service/contact' className='nav-link contact-btn'>Feedback</NavLink>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Service
