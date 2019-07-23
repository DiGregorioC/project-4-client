import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Prompts = (props, state) => {
  const [prompts, setPrompts] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/prompts`)
      .then(res => setPrompts(res.data.prompts))
      .catch(console.error)
  }, [])

  const filtedPrompts = prompts.filter(prompt => prompt.category === 'industrial')
  const item = filtedPrompts[Math.floor(Math.random() * filtedPrompts.length)]

  console.log(props.location)
  return (
    <div>
      <h4>Industrial</h4>
      <div>{item && item.text}</div>
      <Link to="/industrial" >Get another</Link>
    </div>
  )
}

export default Prompts
