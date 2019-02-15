// The function exported from this file will receive two arguments
// First and second are both character models (see characters.json for that structure)
// It should return an object with the following structure

// {
//   victor: string with the name of the winner,
//   loser: string with the name of the loser,
//   combatants: an array of strings of the names of the characters in the fight,
//   actions: an array of strings representing what happened during the fight.
//            e.g. "Glaurung smote Túrin with baleful eyes". These will be printed to the screen so make them interesting!
// }

const pickAWinner = (first, second) => ({
  victor: first.name,
  loser: second.name,
  combatants: [first.name, second.name],
  actions: ["KO"],
})

module.exports = pickAWinner
