import React from 'react'
import { Feature } from '../../components'
import './whoisnaruto.css'

const WhatGPT3 = () => {
  return (
    <div className='win__wrapper section__padding' id='naruto'>
      <div className='gpt3__whatgpt3' >
        <div className='gpt3__whatgpt3-features'>
          <Feature title='Who is Naruto' text='Naruto is a young ninja from the village of Konoha who dreams of becoming the Hokage, the leader of his village. He is known for his optimistic personality, determination, and his signature jutsu is Rasengan.'/>
        </div>
        <div className='gpt3__whatgpt3-heading'>
          <h1> I never go back on my word, that is my nindo!</h1>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title='Teachers' text="Naruto has been taught by Iruka Umino, Kakashi Hatake and Jiraiya the legendary Sannin"/>
          <Feature title='Best Friend' text="Naruto's best friend is Sasuke Uchiha."/>
          <Feature title='Enemies' text="Naruto's greatest enemies are (his best frend) Sasuke Uchiha, Orochimaru, Pain/Nagato, Obito and Madara Uchiha."/>
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3
