import _ from 'lodash'

const SUITES = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
const VALUES = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2]

const GetCardDeck = () => {
  let newCardDeck = []
  SUITES.forEach(suite => {
    VALUES.forEach(value => {
      newCardDeck.push(value + ' ' + suite)
    })
  })
  return _.shuffle(newCardDeck)
}

export default GetCardDeck
