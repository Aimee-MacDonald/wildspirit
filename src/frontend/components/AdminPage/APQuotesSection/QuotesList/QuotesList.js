import React, {useState, useEffect} from 'react'

import './QuotesList.sass'

const QuotesList = () => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('/api/quotes')
      .then(res => res.json())
      .then(result => setQuotes(result))
      .catch(error => console.log(error))
  })

  const deleteQuote = quoteID => {
    fetch('/api/deleteQuote', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({quoteID})
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return(
    <div id='QuotesList'>
      {quotes.map(quote => (
        <div key={quote._id} className='quote'>
          <button onClick={() => deleteQuote(quote._id)}>X</button>
          <p>{quote.quoteText}</p>
        </div>
      ))}
    </div>
  )
}

export default QuotesList