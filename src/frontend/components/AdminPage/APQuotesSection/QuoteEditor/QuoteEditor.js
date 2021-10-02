import React from 'react'

import './QuoteEditor.sass'

const QuoteEditor = () => {
  const save = e => {
    e.preventDefault()

    fetch('/api/quotes/post', {
      method: 'post',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return(
    <form onSubmit={save} id='QuoteEditor'>
      <input id='quote' name='quote'/>
      <button type='submit'>Add Quote</button>
    </form>
  )
}

export default QuoteEditor