import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  //pas of an object for more option and more way to change the value and color
  const [alert, setAlert] = useState({ show: false, msg: " ", type: " " })
  const handelSubmit = (e) => {
    e.preventDefault()
    //show the display alert
    if (!name) {
      //for the name and edite
    } else if (name && isEditing) {

    } else {
      //show the alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
    }
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handelSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Item</h3>
        <div className='form-control'>
          <input className='grocery' type='text' placeholder='eg:egg' value={name} onChange={(e) => setName(e.target.value)} />
          <button type='submit' className='submit-btn' >{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>clear all items</button>
      </div>
    </section>
  )
}

export default App
