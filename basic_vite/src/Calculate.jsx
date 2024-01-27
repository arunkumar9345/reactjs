import React from 'react'

function Calculate() {
  // but.addEventListener('click',touch)
  function touch(){
      const data=document.getElementById('name')
      // const but=document.getElementById('but')
        if(data.value<=0)
        {
            ("negative number")
        }
        else{
            alert("positive number")
        }
    }
  return (
    <>
    <p><input type='number' id="name" placeholder='username'/></p>
    <button id='but' onClick={touch}>click here</button>
    </>
  )
}

export default Calculate