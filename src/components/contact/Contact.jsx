import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w26u74r', 'template_5aodb4t', form.current, '4_C-pooNAKOorzDnX')

    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Entrer en Contact</h5>
      <h2>Me Contacter</h2>

      <div className='container contact__container'>

        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>abdoulaye98@hotmail.fr</h5>
            <a href='mailto:abdoulaye98@hotmail.fr'  target='_blank'>Envoyer un message</a>
          </article>


          <article className='contact__option'>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+330641295883</h5>
            <a href='https://api.whatsapp.com/send?phone=+330641295883'  target='_blank' >Envoyer un message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Votre Nom' required/>
          <input type='email' rows='7' placeholder='Votre Email' required/>
          <textarea name='message' placeholder='Votre Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer votre Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact