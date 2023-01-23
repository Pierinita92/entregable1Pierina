import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, newRandom, colors}) => {
return (
    <div className='quoteBox' style={{color: colors}}>
      <i className='iconBox bx bxs-quote-alt-left'></i>
      <p className='cite'>{quote.quote}</p>
      <h3 className='author'>{quote.author}</h3>
      <QuoteButton colors={colors} newRandom= {newRandom} /> 
    </div>
)
}

export default QuoteBox