const pickAWinner = (first, second) => ({
  victor: first.name,
  loser: second.name,
  combatants: [first.name, second.name],
  actions: ["KO"],
})

module.exports = pickAWinner
