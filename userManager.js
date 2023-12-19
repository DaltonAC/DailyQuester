/*
usage:

const myCharacter = createCharacter();
myCharacter.levelUp();
const inventory = myCharacter.getInventory();

etc
*/

(function () {
    // exports
    window.createCharacter = createCharacter;
    
    function createCharacter () {
        // creates character
        const character = {
            "name": "defauly",
            "level": 1,
            "experience": 0,
            "health": 10,
            "strength": 1,
            "wisdom": 1,
            "charisma": 1
        };
        
        // creates inventory
        const inventory = [
            "Dagger", "Holy water"
        ]
    
        function levelUp () {
            // level up the character
            character.level++;
            return character.level;
        }

        function getLevel () {
            console.log("Your level is: ", character.level)
            return character.level;
        }

        function getInvetory () {
            console.log("Your inventory is: ", inventory);
            return inventory;
        }
    }

    // character API
    return {
        levelUp,
        getLevel,
        getInvetory
    };
}())
