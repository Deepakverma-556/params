import React from 'react'
import { NavLink } from 'react-router-dom'
import { CARD_LIST } from '../utils/helper'

const Menu = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
      <div className='max-w-6xl px-4 mx-auto'>
        <div className='flex gap-36
         flex-wrap -mx-3'>
          {CARD_LIST.map((obj, i) => (
            <NavLink key={i} to="/card/try">
              <h1>{obj.title}</h1>
              <p>{obj.description}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Menu