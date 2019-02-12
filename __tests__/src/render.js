const chalk = require("chalk")
const render = require("../../src/render")

describe("Frame rendering to screen", () => {
  it("should render a frame correctly", () => {
    // Given a fight model
    const fight = {
      combatants: ["Bob", "Sue"],
      victor: "Bob",
      loser: "Sue",
      actions: ["boom", "wallop", "pow"],
    }

    // It should render a correctly-formatted string that can be shown to the user
    expect(render(fight)).toEqual(`
${chalk.yellow(`Bob and Sue enter the fray!`)}

${chalk.italic(`boom`)}
${chalk.italic(`wallop`)}
${chalk.italic(`pow`)}

Bob defeats Sue
`)
  })
})
