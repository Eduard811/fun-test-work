import React from 'react'
import CardContainer from './components/Card/CardContainer'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Ты сегодня покормил кота?</h1>
      </header>
      <div className="container">
        <CardContainer />
      </div>
    </div>
  )
}

export default App
