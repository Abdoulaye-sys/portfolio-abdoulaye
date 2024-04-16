import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Abdoulaye-home.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Salut je suis</h5>
        <h1>Abdoulaye Ba</h1>
        <h5 className='text-light'>Développeur fullstack</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scrollez vers le bas</a>
      </div>
    </header>
  )
}

export default Header