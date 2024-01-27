import React from 'react'

function Hello(props) {
  const name='arunkumar'
  return (
    <>
    <h1 style={{color:"yellowgreen"}}>hello my name is {name} and i am from {props.place1}</h1>
    </>
  )
}

export default Hello


