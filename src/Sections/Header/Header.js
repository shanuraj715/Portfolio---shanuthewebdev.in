import { useState } from 'react'
import './header.css'
import Logo from '../../assets/images/shanuthewebdev.png'

function Header() {

    return (
        <div className="container-fluid header">
            <header className="container">
                <div className="header-logo-cont">
                    <a href="#"><img src={Logo} alt="" /></a>
                </div>
                <div className="humburger-cont">
                    <span className="">
                        <i className="fas fa-bars"></i>
                    </span>
                </div>
                <nav>
                    <span className="">
                        <i className="fas fa-times"></i>
                    </span>
                    <ul>
                        <li onClick={() => {
                            window.scrollTo(0, document.getElementById('social').offsetTop - 210)
                        }}><a>Social</a></li>
                        <li onClick={() => {
                            window.scrollTo(0, document.getElementById('services').offsetTop - 210)
                        }}><a>Services</a></li>
                        <li onClick={() => {
                            window.scrollTo(0, document.getElementById('skills').offsetTop - 100)
                        }}><a>Skills</a></li>
                        <li><a href="https://projects.techfacts007.in/04614004420.pdf" target="_blank">Download CV</a></li>
                        <li onClick={() => {
                            window.scrollTo(0, document.getElementById('cu').offsetTop - 150)
                        }}><a>Contact Me</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header