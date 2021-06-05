import React, { useState } from 'react';
import data from './data';
function App() {
  //at first i call this two hook for count the paragraph and first of all the text will be empty..
  const [count, setCount] = useState(0)
  const [text, setText] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  }

  return (
    <section className='section-center'>
      <h3>Some Paragraph is given below..</h3>
      <form className='lorem-form' onSubmit={handelSubmit}>
        <label htmlFor='amount'>
          Paragraph:
        </label>
        <input type='number' name='amount' id='amount' value={count}
          onChange={(e) => setCount(e.target.value)} />
        <button className='btn' type='submit'>genereate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
        <p>
          Developed @ By RH.Shanto
        </p>
      </article>
    </section>
  )
}

export default App;
