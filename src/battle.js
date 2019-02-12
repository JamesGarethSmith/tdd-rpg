const shuffle = require("../lib/shuffle")

const recursivelyFight = (characters, combat, state = { fights: [] }) => {
  if (characters.length === 1) {
    return { ...state, victor: characters[0].name }
  }

  const shuffled = shuffle(characters)
  const [first, second] = shuffled
  const outcome = combat(first, second)

  return recursivelyFight(
    characters.filter(character => character.name !== outcome.victor),
    combat,
    {
      fights: [...state.fights, outcome],
    },
  )
}

module.exports = recursivelyFight
