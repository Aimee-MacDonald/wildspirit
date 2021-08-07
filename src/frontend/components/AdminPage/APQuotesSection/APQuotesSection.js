import React from 'react'

import QuotesList from './QuotesList/QuotesList'
import QuoteEditor from './QuoteEditor/QuoteEditor'

import './APQuotesSection.sass'

const APQuotesSection = () => (
  <div id='APQuotesSection'>
    <h1>Quotes Section</h1>
    <QuotesList/>
    <QuoteEditor/>
  </div>
)

export default APQuotesSection