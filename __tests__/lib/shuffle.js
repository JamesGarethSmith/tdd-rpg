const shuffle = require("../../lib/shuffle")

function* fakeRandomness() {
  yield 3
  yield 2
  yield 1
}

const generator = fakeRandomness()

const generate = () => generator.next().value

it("should return a random version of its input", () => {
  const a = ["first", "second", "third"]

  expect(shuffle(a, generate)).not.toEqual(["first", "second", "third"])
})
