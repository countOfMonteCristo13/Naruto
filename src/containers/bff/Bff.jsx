import React from 'react'
import './bff.css'

import sasuke from '../../naruto_slike/sasuke.png'

const sasukeDetailsp1 = "Sasuke is a skilled ninja from the Uchiha clan and the last surviving member of his family."; 
const sasukeDetailsp2 = "Sasuke is Naruto's best friend turned rival, as he seeks revenge against his older brother Itachi for killing their family.";
const sasukeDetailsp3 = "He is known for his cool and detached personality, as well as his mastery of the Sharingan and other powerful techniques."
const sasukeDetailsp4 ="Sasuke is also a member of Team 7 and later becomes a rogue ninja, eventually siding with Naruto in the series' final arc."
const sasukeDetailsp5 ="Sasuke has faced many challenges and internal conflicts throughout the series, including his desire for revenge and his struggle to find his true purpose in life.";



const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='bff'>
        <div className='gpt3__possibility-image'>
          <img src={sasuke} alt="possibility" />
        </div>
        <div className='gpt3__possibility-content'>
          <h1 className='gradient__text-naruto'>"Having too many bonds causes one to lose focus, weakening their strongest wish, their greatest desire." - Sasuke Uchiha</h1>
          <div className='gpt3__possibility-content-p'>
            <p>{sasukeDetailsp1}</p>
            <p>{sasukeDetailsp2}</p>
            <p>{sasukeDetailsp3}</p>
            <p>{sasukeDetailsp4}</p>
            <p>{sasukeDetailsp5}</p>
          </div>
        </div>
    </div>
  )
}

export default Possibility
