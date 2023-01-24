
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [test, setTest] =  useState([1,2,3])

  /* state = {
    data: []
  } */
  const componentDidMount = () => {
    axios.get('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider')
      .then(res => {
        setTest({ test/*  : res.test  */})
      })
      .catch(error => {
        console.log(error)
      })
  }


 useEffect(() => {
 componentDidMount()
  });

  return (
    <div>
      {test.map(item => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
