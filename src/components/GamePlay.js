import React from 'react'
import GetCardDeck from '../action/GetCardDeck'

export default class GamePlay extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cardDeck: GetCardDeck(),
      player1Hand: [],
      player2Hand: []
    }
  }

  distributeCard = () => {
    let cardDeckCopy = [...this.state.cardDeck]
    let currCard = cardDeckCopy.pop()
    this.setState({ cardDeck: cardDeckCopy })
    return currCard
  }

  startGame = () => {
    this.setState({
      player1Hand: this.distributeCard()
    })
    this.setState({
      player2Hand: this.distributeCard()
    })
  }


  render() {

    return(
      <button
        onClick={() => {
          this.startGame()
          console.log(this.state.player1Hand)
          console.log(this.state.player2Hand)
          console.log(this.state.cardDeck)
        }}
      >
        Game Play
      </button>
    )
  }
}
