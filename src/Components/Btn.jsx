import React from 'react'

const Btn = (props) => {
  return (
    <button className={`${props.styles} ${props.hover} ${props.sty} transition m-2 font-semibold py-2 px-4 hover:border-transparent rounded-full`}>{props.name}</button>
  )
}

export default Btn