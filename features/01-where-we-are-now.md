# A very good place to begin

## Program structure

1. Takes a list of combatants (./src/characters.json)
2. Picks two of them at random
3. They fight
4. The winner stays in the pack and this continues until there is only one standing

## Components

| File                  |                                       Purpose                                        |
| --------------------- | :----------------------------------------------------------------------------------: |
| `index.js`            |             Pulls together the rest of the components and runs the game              |
| `src/characters.json` |          Contains the stats for the characters that take part in the fight           |
| `src/battle.js`       |            Returns a list of fights between characters and a final winner            |
| `src/render.js`       |         Transforms a fight into something that can be printed to the screen          |
| `src/combat.js`       | Decides who wins the fight between two characters and what happens during the combat |

Jump over to 02.combat.md to get started
