import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handelSubmit = (e) => {
    e.preventDefault();
    let colors = new Values(color).all(10);
    console.log(colors)
  }
  return (
    <>
      <section className="container">
        <h3>Simple color genarator</h3>
        <form onSubmit={handelSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#fff" />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        <h4>List of hare</h4>
      </section>
    </>
  )
}

export default App
