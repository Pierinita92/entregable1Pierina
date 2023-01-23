import React from 'react'

const QuoteButton = ({newRandom, colors}) => {
  return (
    <button className='button' onClick={newRandom} style={{backgroundColor: colors}}>
      <i className='bx bxs-right-arrow'></i>
    </button>
  )
}

export default QuoteButton