
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';
import { servicesData, servicesData1, eventsData  } from '../Data/staticData';
import Image from 'next/image'
import logo from 'public/assets/landing page images/logo.png';


const Navbar = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleDropdown = (dropdownIndex) => {
    if (dropdownIndex === 1) {
      setDropdown1Open(!dropdown1Open);
      setDropdown2Open(false);
    } else if (dropdownIndex === 2) {
      setDropdown2Open(!dropdown2Open);
      setDropdown1Open(false);
    }
  };


  const router = useRouter();

  const closeDropdowns = () => {
    setDropdown1Open(false);
    setDropdown2Open(false);
  };

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
    <Helmet>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Helmet>    
    <header id="nav-menu" aria-label="navigation bar">
      <div className="contain">
        <div className="nav-start">
        <a className="logo" href="/">
        <Image
        className='logoimg'
          src={logo}
          width={60}
          height={60}
          alt="Inc Logo"
        />
      </a>

          <nav className={`menu ${hamburgerOpen ? 'show' : ''}`}>
            <ul className="menu-bar">
            <li><a className="nav-link" href="/">Home</a></li>
            <li><a className="nav-link" href="/users/servicepage">Service</a></li>
                {/* <li>
                  <button
                    className="nav-link dropdown-btn"
                    onClick={() => toggleDropdown(1)}
                    aria-haspopup="true"
                    aria-expanded={dropdown1Open}
                    aria-label="Services"
                  >
                    Services
                    <i className="bx bx-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div id="dropdown1" className={`dropdown ${dropdown1Open ? 'active' : ''}`}>
                    <ul role="menu">
                      <li role="menuitem">
                      {servicesData.map((service, index) => (
                      <a key={index} className="dropdown-link" href="/users/servicepage">
                        <Image src={service.imgSrc} className="icon" alt={service.title}/>
                        <h4 className="dropdown-link-title">{service.title}</h4>
                      </a>
                    ))}
                      </li>
                    </ul>
                    <ul role="menu">
                      <li role="menuitem">
                      <li role="menuitem">
                      {servicesData1.map((service1, index) => (
                      <a key={index} className="dropdown-link" href='/users/servicepage'>
                        <Image src={service1.imgSrc} className="icon" alt={service1.title}/>
                        <h4 className="dropdown-link-title">{service1.title}</h4>
                      </a>
                    ))}
                      </li>
                      </li>
                    </ul>
                  </div>
                </li> */}
                {/* <li>
                  <button
                    className="nav-link dropdown-btn"
                    onClick={() => toggleDropdown(2)}
                    aria-haspopup="true"
                    aria-expanded={dropdown2Open}
                    aria-label="Events"
                  >
                    Events
                    <i className="bx bx-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div id="dropdown2" className={`dropdown ${dropdown2Open ? 'active' : ''}`}>
                    <ul role="menu">
                    <li role="menuitem">
                    {eventsData.map((event, index) => (
                      <a key={index} className="dropdown-link" href={event.href}>
                        <Image src={event.imgSrc} className="icon" alt={event.title}/>
                        <h4 className="dropdown-link-title">{event.title}</h4>
                      </a>
                    ))}
                      </li>
                    </ul>
                  </div>
                </li> */}
              <li><a className="nav-link" href="/users/aboutpage">About</a></li>
              <li><a className="nav-link" href="/users/gallerypage">Gallery</a></li>
              <li><a className="nav-link" href="/users/contactpage">Contact</a></li>
              <li><a href="/users/signin" id='right' className="nav-link" style={{ color: 'var(--darker-secondary-color)' }}> Signin </a></li>
              <li className='eve'><a onClick={() => router.push("/admin/auth")} id='right' className="event" href="#">Book Us</a></li>
            </ul>
          </nav>
        </div>

        <div className="nav-end">
          <div className="right-contain">
          <a href="/users/signin" className="nav-link sign px-5" style={{ color: 'var(--darker-secondary-color)' }}> Signin </a>
          <button onClick={() => router.push("/admin/auth")}  href="#" >Book Us</button>
          </div> 
          <button
            id="hamburger"
            aria-label="hamburger"
            aria-haspopup="true"
            aria-expanded={hamburgerOpen}
            onClick={toggleHamburger}
          >
            <i className="bx bx-menu" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
    </>

  );
};

export default Navbar;


