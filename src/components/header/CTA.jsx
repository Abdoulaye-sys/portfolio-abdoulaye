import React from 'react'
import CV from '../../assets/Cv_Abdoulaye_Ba.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Télécharger mon CV</a>
        <a href='#contact' className='btn btn-primary'>On échange ? </a>
    </div>
  )
}

export default CTA