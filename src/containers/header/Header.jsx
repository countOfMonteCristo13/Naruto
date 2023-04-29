import React from 'react'
import './header.css'
import ai from '../../naruto_slike/naruto3.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1>Let's find out everything about Naruto and his world
        </h1>
        <p>
        Yet bed any for travelling assistance indulgence unpleasing. 
        Not thoughts all exercise blessing. 
        Indulgence way everything joy alteration boisterous the attachment. 
        Party we years to order allow asked of.
        </p>
        <div  className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Adress'/>
          <button type='button'>Get Started</button>
        </div>

      </div>

      <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
      </div>
      
    </div>
  )
}

export default Header
