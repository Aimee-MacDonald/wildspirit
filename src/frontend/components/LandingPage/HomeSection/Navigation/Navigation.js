import React from 'react'

import './Navigation.sass'

const Navigation = () => (
  <nav id='Navigation'>
    <ul>
      <li><a href='#LiveSection'>Live</a></li>
      <li><a href='#LearnSection'>Learn</a></li>
      <li><a href='#ExploreSection'>Explore</a></li>
    </ul>
  </nav>
)


export default Navigation;

/*
@import '../../../../vars'
@import '../../../../mixins'
  
#Navigation
  width: 100%
  @include breakpoint(tablet_portrait)
    width: 20rem
    align-self: flex-end
  ul
    width: 100%
    display: flex
    flex-flow: nowrap row
    justify-content: space-around
    @include breakpoint(tablet_portrait)
      justify-content: space-between
    li
      text-align: center
      a
        color: white
        font-family: 'Montserrat-Regular'
        font-size: 24pt
        text-decoration: none
        @include breakpoint(tablet_portrait)
          padding: 0.5rem 1rem
          border-radius: 0.2rem
        &:hover
          color: $light-green
          text-decoration: underline
          font-weight: bold
*/