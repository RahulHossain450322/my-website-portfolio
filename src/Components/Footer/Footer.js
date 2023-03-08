import React from 'react'

import { AiOutlineCopyright } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandGithub } from "react-icons/tb";
import FooterStyle from './Footer.css'
import { NavLink } from 'react-router-dom';
//linkedin.com/in/rahul-hossain-b3474025a

function Footer() {
  return (
    <section className='footer'>
      <div className='container'>
        <div className='footer_content'>
            <div className='footer_content_1'>
                <h2 className='h6 footer_title'>Web Development</h2>
                <p className='footer_des'>
                    <AiOutlineCopyright className='copy' /> 2021
                </p>
            </div>
            <div className='footer_content_2'>
                <h2 className='h6 footer_title'>Customar</h2>
                <p className='footer_des'>
                    Buyer <br/>
                    Suplier
                </p>
            </div>
            <div className='footer_content_2'>
                <h2 className='h6 footer_title'>Company</h2>
                <p className='footer_des'>
                    About Us <br/>
                    Career <br/>
                    Contact Us
                </p>
            </div>
            <div className='footer_content_2'>
                <h2 className='h6 footer_title'>Further Information</h2>
                <p className='footer_des'>
                    Terms & Conditions <br/>
                    Privacy Policy <br/>
                </p>
            </div>
            <div className='footer_content_2'>
                <h2 className='h6 footer_title'>Follow Us</h2>
                <div className='follow_icons '>
                    <NavLink to='https://www.facebook.com/profile.php?id=100065615823403'><RiFacebookFill className='follow_icon' /></NavLink>
                    <NavLink to='https://www.linkedin.com/in/rahul-hossain-b3474025a'><TfiLinkedin className='follow_icon' /></NavLink>
                    <NavLink to='https://github.com/'><TbBrandGithub className='follow_icon' /></NavLink>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
