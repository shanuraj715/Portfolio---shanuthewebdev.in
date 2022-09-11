import React from 'react'
import './sidebarsocial.css'

function SidebarSocial() {
    return (
        <div className="sidebar-social-cont" data-aos="zoom-in-right" data-aos-delay="1200">
            <a href="https://wa.me/919877936035" className="sidebar-social-link whatsapp-icon">
                <i className="fab fa-whatsapp-square"></i>
            </a>
            <a href="tel://+918271890685" className="sidebar-social-link phone-icon">
                <i className="fas fa-phone-square-alt"></i>
            </a>
            <a href="https://www.facebook.com/shanuraj715" className="sidebar-social-link facebook-icon">
                <i className="fab fa-facebook-square"></i>
            </a>
            <a href="mailto://shanuraj715@gmail.com" className="sidebar-social-link email-icon">
                <i className="fas fa-envelope-square"></i>
            </a>
        </div>
    )
}

export default SidebarSocial