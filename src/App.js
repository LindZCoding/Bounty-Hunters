import './App.css';
import { useEffect, useState } from 'react'
import Poster from './Poster';
import Display from './Display'
import Form from './Form';


function App() {

  const [bounties, setBounties] = useState([])
  const [current, setCurrent] = useState({})

  // REQUEST FROM API TO GET API INFO
  useEffect(() => {
    fetch('http://localhost:8000/bounties')
      .then(response => response.json())
      .then(foundBounties => {
        // console.log(foundBounties)
        setBounties(foundBounties)
      })
  }, [])

  const changeCurrent = bounty => {
    setCurrent(bounty)
  }

  const posters = bounties.map(b => {
    return <Poster bounty={b} key={b.name} changeCurrent={changeCurrent} />
  })


  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanted</h1>
        <Display currentBounty={current} />
      </header>
      <section className='Poster-Board'>
        {posters}
      </section>
      <section className="App-header">
        <Form />
      </section>
    </div>
  );
}

export default App;
