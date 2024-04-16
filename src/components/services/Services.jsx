import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Ce que je propose</h5>
      <h2>Services</h2>

      <div className='services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Développement Web et Mobile</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Création d'un site avec Symfony.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Moyen de paiement avec Stripe.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Création d'une application mobile.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Gestion de Base de donnée.</p>
            </li>

          </ul>
        </article>
        {/* WEB DEVELOPMENT*/}


        <article className='service'>
          <div className='service__head'>
            <h3>Contenu de création</h3>
          </div>

          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Création d'un clone de Instagram.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Site de Réservation.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Portfolio.</p>
            </li>


          </ul>



      </article>

        
      </div>
    </section>
  )
}

export default Services