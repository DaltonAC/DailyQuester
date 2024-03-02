let userManager = (function(){
    
    let character = {};
    let inventory = [];

    createCharacter = function(){
        // create a character
        let character = {
            "Name": "Lord Defaulty",
            "Level": 1,
            "Experience": 0,
            "Health": 10,
            "MaxHealth": 10,
            "Strength": 1,
            "Wisdom": 1,
            "Charisma": 1
            }
        return character
    };

    getCharacter = function(){
        // view character sheet
        console.log(character)
        return character
    }

    resetCharacter = function(){
        // reset character + inventory to default
        character = createCharacter()
        inventory = createInventory()
        console.log("Character has been reset.")
    }
    
    createInventory = function(){
        // creates inventory
        let inventory = [
            "Dagger", "Holy water", "Health potion","Rope"
        ]
        return inventory
    };
    
    levelUp = function(){
        // level up the character 
        character.level++
        character.maxHealth += 2    
        character.health = character.maxHealth
    }

    getLevel = function(){
        // view character level
        console.log("Your level is: ", character.level)
        return character.level
    }

    getInventory = function(){
        // view current inventory
        console.log(inventory)
        return inventory
    }

    removeItem = function(){
        // remove a random item from inventory
        let ran = Math.floor(Math.random() * inventory.length);
        let removed = inventory.splice(ran, 1)[0]
        console.log(removed + " was removed from inventory.")
    }

    addItem = function(itemToAdd){
        // add an item to inventory based on input
        inventory.push(itemToAdd)
        console.log(itemToAdd + " added to your inventory.")
    }

    saveCharacter = function(){
        // save character + inventory
        let characterString = JSON.stringify(character)
        let inventoryString = JSON.stringify(inventory)
        localStorage.setItem("character", characterString)
        localStorage.setItem("inventory", inventoryString)
        console.log("Saved character + inventory")
    }
    
    
    return {
        initialize:function(){
            character = localStorage.getItem("character") === null ? createCharacter() : JSON.parse(localStorage.getItem("character"))
            inventory = localStorage.getItem("inventory") === null ? createInventory() : JSON.parse(localStorage.getItem("inventory"))
        }, 
        levelUp:function(){
            levelUp(),
            saveCharacter()
        },
        getLevel:function(){
            return getLevel()
        },
        getInventory:function(){
            return getInventory()
        },
        removeItem:function(){
            removeItem()
            saveCharacter()
        },
        resetCharacter:function(){
            resetCharacter()
            saveCharacter()
        },
        getCharacter:function(){
            return getCharacter()
        },
        addItem:function(itemToAdd){
            addItem(itemToAdd)
            saveCharacter()
        }
    }
}())


