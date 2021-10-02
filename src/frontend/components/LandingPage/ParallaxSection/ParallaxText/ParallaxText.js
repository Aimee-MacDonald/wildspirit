import React, {useState, useEffect} from 'react'

import './ParallaxText.sass'

const ParallaxText = () => {
  const [quote, setQuote] = useState()

  useEffect(() => {
    fetch('/api/quotes/getRandom')
      .then(res => res.json())
      .then(result => setQuote(result.quoteText))
      .catch(error => setQuote(''))
  }, [])

  return(
    <div id='ParallaxText'>
      <p>{quote}</p>
    </div>
  )
}

export default ParallaxText