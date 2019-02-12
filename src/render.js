const chalk = require("chalk")

const render = frame => `
${chalk.yellow(
  `${frame.combatants[0]} and ${frame.combatants[1]} enter the fray!`,
)}

${chalk.italic(frame.actions.join("\n"))}

${frame.victor} defeats ${frame.loser}
`

module.exports = render
