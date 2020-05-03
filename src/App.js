import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'

const SIDE = 6
const SYMBOLS = '🐶🍌🍓🦊🐻🐰🐷🦉🦍🦔🐥🥭🍫🥑🍍🍹🥒🍣'

class App extends Component {
  cards = this.generateCards()

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {this.cards.map((card, index) => (
            <Card card={card} feedback='visible' key={index} onClick={this.handleCardClick} />
        ))}
        {won && <p>GAGNÉ !</p>}
      </div>
    )
  }
}

export default App
