import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Components = () => {
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts') 
  //    .then (response => response.json()) convert response to js object
  //   .then(response => console.log(response)) send res to console
      //  .catch(err => console.log(err)); catch any error and send to console

  // },[])
  useEffect(() => {
     fetch('')
     .then (response => response.json())
      .then(response => console.log(response))
     .catch(err => console.log(err.message))
     
  },[])
  return (
    <div>
      <axios/>
    </div>
  )
}

export default Components
