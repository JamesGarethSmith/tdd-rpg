const combat = require("../../src/combat")

describe("Our mighty combat engine", () => {
  it("should pick a winner correctly", () => {
    // Given a list of characters
    const characters = [{ name: "first" }, { name: "second" }]

    // When they fight
    const fight = combat(characters[0], characters[1])

    // It should return the correct winner
    expect(fight.victor).toEqual("first")
    // And a loser
    expect(fight.loser).toEqual("second")
    // And return at least something that happened in the fight
    expect(fight.actions.length).toBeGreaterThan(0)
  })
})
