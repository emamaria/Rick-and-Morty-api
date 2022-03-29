import React from 'react'

export const Characters = ({name, image}) => {
  return (
    <div className="character-big-container">
       <div className="character-container">
       <p className="text-style">{name}</p>
        <img  className="img-style" src={image}  alt={name}/>
       </div>
    </div>
  )
}
