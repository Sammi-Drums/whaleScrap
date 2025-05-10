import { useState } from 'react';
import {Link} from 'react-router-dom';
import {FiMenu, FiX} from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        {
            id: 'home', 
            label: 'Home'
        },
        
        {
            id: 'about', 
            label: 'About'
        },

        {
            id: 'services', 
            label: 'Services'
        },

        {
            id: 'faq', 
            label: 'FAQ'
        },

        {
            id: 'contact', 
            label: 'Contact'
        }

    ]
  return (
    <nav className='px-md py-md'>
        <div className='app__navbar-logo'>
            whale<span>Watch</span>
        </div>

        <ul className='app__navbar-links'>
            {
                navLinks.map(({id,label}) => ( 
                    <li className='app__navbar-link' key={id}>
                        <a 
                            href={`/#${id}`} 
                            className='app__navbar-link-item'
                            // onClick={(e) => e.preventDefault()}
                        >
                            {label}
                        </a>
                    </li>
                ))
            }
        </ul>

        <button className='btn nav-cta'>
            <a href='#' className='starter-btn'>
                Get Started
            </a>
        </button>

        <FiMenu 
            className='app__navbar-menu'
            onClick={() => setIsOpen(true)}

        />

        <div className={`app__navbar-smallscreen-nav ${isOpen? 'open' : ''}`}>
                    
            <FiX 
                className='app__close-icon'
                onClick={() => setIsOpen(false)}
            />

            <div
                className='smallscreen-nav'
            >
                {
                    navLinks.map(({id, label}) => (
                        <a 
                            href={`/#${id}`} key={id}
                            onClick={() => setIsOpen(false)}
                        >{label}</a>
                    ))
                }
            </div>
        </div>

    </nav>
  )
}

export default Navbar