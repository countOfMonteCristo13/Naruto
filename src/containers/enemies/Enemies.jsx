import React from 'react'
import './enemies.css'

import { Article } from '../../components'
import {akatsuki, orochimaru, pain, obito, madara} from './imports'

const aD = "Akatsuki is a organization thats ultimate goal is to create a world of peace by obtaining tailed beasts. Members of Akatsuki wear long black robes with red clouds and unique rings and each member has a specific set of skills and abilities that they contribute to the group.";
const orD = "Orochimaru is a legendary Sannin. Best known for his inhuman experiments, seeking immortality, and his ability to use snakes. His signature technique is the Summoning: Impure World Reincarnation, which he uses to revive the dead and control them.";
const pD = "Pain's real name is Nagato Uzumaki. He adopted the alias \"Pain\" and controlled six different bodies, which he used to carry out the will of Akatsuki. He possessed the Rinnegan, one of the most powerful dojutsu (eye techniques) in the Naruto universe.";
const obD = "Obito was once a ninja of Konoha and a member of Team Minato, along with Kakashi and Rin. Obito suffered a traumatic injury during a mission, which led him to adopt the identity of \"Tobi\" and join Akatsuki. He possesses the Sharingan, a powerful dojutsu that allows him to copy techniques, read minds, and control others.";
const mD = "Madara was one of the co-founders of the Konoha and a legendary ninja during his time. Madara possessed the Sharingan, as well as the Rinnegan, making him one of the most powerful shinobi. He was instrumental in creating the Akatsuki organization and influencing Obito to carry out his plans.";



const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='enemies'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text-naruto'>"The world shall know pain" - Pain</h1>
      </div>
      
      <div className='gpt3__blog-container'> 
            <Article  imgUrl={akatsuki} date={aD} title='Akatsuki'/>
            <Article  imgUrl={orochimaru} date={orD} title='Orochimaru'/>
            <Article  imgUrl={pain} date={pD} title='Pain'/>
            <Article  imgUrl={obito} date={obD} title='Obito Uchiha'/>
            <Article  imgUrl={madara} date={mD} title='Madara Uchiha'/>
      </div>

        
        
      
    </div>
  )
}

export default Blog
