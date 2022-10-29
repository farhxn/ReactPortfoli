import React from 'react'

const Workitems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
      <img src= {item.image} className='work__img'/>
      <h3 className='work__title'>{item.title}</h3>
      <small>{item.disc}</small> <br/><br/>
      <a href={item.link} target="_blank" className='work__button'>Check this out! <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
    </div>
  )
}

export default Workitems
