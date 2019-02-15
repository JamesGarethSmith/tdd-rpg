# Combat

> Arise, arise, Riders of Théoden!
> Fell deeds awake, fire and slaughter!
> spear shall be shaken, shield be splintered,
> a sword-day, a red day, ere the sun rises!
> Ride now, ride now! Ride to Gondor!

At the moment the combat is automatically won by the character who happened to be passed as the first parameter to the combat function (`src/combat.js`).

Your first task is to update this function to represent a real fight.

The characters that are passed to this function have health and a weapon that deals damage.

Some problems that you might need to solve are:

1. Who goes first?
2. Take turns hitting each other until someone is dead
3. Return the fight in the correct format

Remember the TDD rules.
