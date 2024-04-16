import React from 'react'
import './about.css'
import ME from '../../assets/abdoulaye_portfolio-ConvertImage.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Qui suis-je</h5>
      <h2>À propos de moi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about me' />
          </div>
        </div>


        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> Stage développeur mobile</small>
            </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projet</h5>
                <small> 6 projets terminés</small>
              </article>

          </div>

            <p>
              Développeur full stack certifié avec de l'expérience. Mordu d’informatique, j’ai appris à coder dans divers langages informatiques (Javascript, PHP, Symfony, React Native…) et ai créé des projets personnels, dont un site de réservation pour un agence de voyage . Polyvalent, je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web ; de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance. 
            </p>

            <a href='#contact' className='btn btn-primary'>Parlons</a>
        </div>
      </div>
    </section>
  )
}

export default About