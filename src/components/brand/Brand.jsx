import React from 'react'
import './brand.css'
import {uzumaki_logo, uchiha_logo, akatsuki_logo} from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={uzumaki_logo} alt='uzumaki' />
      </div>
      <div>
        <img src={uchiha_logo} alt='uchiha' />
      </div>
      <div>
        <img src={akatsuki_logo} alt='akatsuki' />
      </div>
    </div>
  )
}

export default Brand
