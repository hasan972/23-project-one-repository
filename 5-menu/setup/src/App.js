import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItem, setMenuItem] = useState(items)
  const [categories, setCaptegories] = useState([])
  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Oure Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories />
      {/* //all the data is props for this */}
      <Menu items={menuItem} />
    </section>
  </main>;
}

export default App;
