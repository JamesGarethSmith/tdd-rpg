# TDD RPG

Welcome to TDD RPG. We're building the engine for a totally amazing RPG game. When it's finished it will have sizzling graphics and an amazing control system. It's pretty much a shoe-in for game of the year. Think of the money we'll make! (oh yeah and creative satisfaction and stuff).

But for now we're building out some of the lower-level functionality. Currently the game:

1. Takes a list of combatants (`./src/characters.json`)
2. Picks two of them at random
3. They fight \* (see below)
4. The winner stays in the pack and this continues until there is only one standing

(\*) Your mission, should you choose to accept it, is to flesh out the combat system. You can find the current implementation at `src/combat.js`

## Getting started

1. Clone this repo
2. `npm install`
3. To run the test suite: `npm test`
4. To start a round of the game: `npm start`
5. Start with `01.where-we-are-now.md` in the features folder

## TDD

Let's keep this simple and stick to three rules

1. Write no implementation code except to make a failing test pass
2. Write only enough of a test to demonstrate failure
3. Write only enough implementation code to pass a test

### This gives us our process.

#### 1. Red

Write a test that would pass if the code did want you want it to (this should fail)

#### 2. Green

Write the code to make that test pass (just get it to pass for now)

#### 3. Refactor

Take the time to make sure that you're happy with the structure of the code. You're free to change things around, safe in the knowledge that as loss as the tests still pass you're all good :thumbsup:
