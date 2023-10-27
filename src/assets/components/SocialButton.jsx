import React from 'react'


const SocialButton = ({path}) => {
  return (
    <div className='round'>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#0b5ed7">
      <path  d={path}/></svg>
    </div>
  )
}

export default SocialButton