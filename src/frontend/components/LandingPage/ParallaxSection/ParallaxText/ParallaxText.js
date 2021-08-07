import React, {useState, useEffect} from 'react'

import './ParallaxText.sass'

const ParallaxText = () => {
  const [quote, setQuote] = useState()

  useEffect(() => {
    fetch('/api/randomQuote')
      .then(res => res.json())
      .then(result => setQuote(result.quoteText))
      .catch(error => console.log(error))
  }, [])

  return(
    <div id='ParallaxText'>
      <p>{quote}</p>
    </div>
  )
}

export default ParallaxText