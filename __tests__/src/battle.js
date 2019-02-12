const battle = require("../../src/battle")

describe("The game itself", () => {
  it("should run through the game", () => {
    // Given a list of characters
    const characters = [
      { name: "first" },
      { name: "second" },
      { name: "third" },
      { name: "fourth" },
    ]

    const session = battle(characters, (first, second) => ({
      actions: [],
      victor: first.name,
      loser: second.name,
    }))

    // It should return a list of one fight
    expect(session.fights.length).toEqual(3)

    // And an ultimate victor
    expect(session.victor).toBeDefined()
  })
})
