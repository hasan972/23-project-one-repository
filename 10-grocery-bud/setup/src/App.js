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
  return <h2>grocery bud setup</h2>
}

export default App
