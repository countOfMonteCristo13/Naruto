import React from 'react'
import { Feature } from '../../components'
import './teachers.css'

const featuresData = [
  {
    title:'Iruka Umino',
    text:"Iruka is a kind-hearted and empathetic teacher who cares deeply for his students. He plays an important role in shaping Naruto's character and helping him become a better ninja."
  },
  {
    title:'Kakashi Hatake',
    text:"Kakashi is a skilled ninja who is known for his cool and aloof personality. Kakashi is a former member of the elite ANBU Black Ops and later becomes the leader of Team 7. He is also famous for his use of the Sharingan."
  },
  {
    title:'Jiraiya',
    text:"Jiraiya is a legendary ninja who trained the Fourth Hokage and later becomes a mentor to Naruto. Jiraiya is known for his perverted behavior and love of alcohol, but he is also a skilled fighter and strategist"
  },
]

const Teachers = () => {
  return (
    <div className='gpt3__features-wrapper section__padding' id='teachers'>

      <div  className='gpt3__features' >
        <div className='gpt3__features-heading'>
          <h1 className='gradient__text-naruto'>"When a person has something important they want to protect, that's when they can become truly strong." - Kakashi Hatake</h1>
        </div>

        <div className='gpt3__features-container'>
          {featuresData.map((feature,i) =>
            <Feature title={feature.title} text={feature.text} key={feature.title + i}/>
          )}
        </div>        
      </div>

      <div className='gpt3__features-bottom-border'/>

    </div>
  )
}

export default Teachers
