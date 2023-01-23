import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import db from './db/quotes.json'

const randomColors= [
  "#00c6ab", "#68da3e", "#223026", "#ef43ef", "#e6a15c", "#ff5f7c", "#394651", "#a0fb0e", "#20c67a", "#3f8880", "#f50400", "#d6a735", "#031851", "#5f5703", "#b2965c", "#869700", "#521a9f", "#d56805", "#008ec9", "#92e442", "#83663a", "#36954b", "#574131", "#1c2edb", "#13482a",
]

const random= (arrayElements) => {
  const values= arrayElements.length
  const randomValues= Math.floor(Math.random() * values)
return arrayElements[randomValues]
}

function App() {

const [quote, setQuote] = useState(random(db));

const [colors, setColors] = useState(random(randomColors));

const newRandom= () => {
  setQuote(random(db))
  setColors(random(randomColors))
};

  return (
    <div className="App" style={{backgroundColor: colors}}>
      <QuoteBox
      quote={quote}
      newRandom= {newRandom}
      colors={colors}
    />
    </div>
  )
}

export default App
