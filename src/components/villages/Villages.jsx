import React from 'react'
import './villages.css'

import {leaf,rain,sand,waterfall,cloud,rock,grass,sound,mist} from './imports'

const Villages = () => {
  return (
    <div className='gpt3__villages section__padding'>
      <div>
        <img src={leaf} alt='google' />
      </div>
      <div>
        <img src={rain} alt='slack' />
      </div>
      <div>
        <img src={sand} alt='atlassian' />
      </div>
      <div>
        <img src={waterfall} alt='google' />
      </div>
      <div>
        <img src={cloud} alt='slack' />
      </div>
      <div>
        <img src={rock} alt='atlassian' />
      </div>
      <div>
        <img src={grass} alt='google' />
      </div>
      <div>
        <img src={sound} alt='slack' />
      </div>
      <div>
        <img src={mist} alt='atlassian' />
      </div>
    </div>
  )
}

export default Villages
