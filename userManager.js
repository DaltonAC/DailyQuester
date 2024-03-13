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
            "Armor": 100,
            "Strength": 1,
            "Wisdom": 1,
            "Charisma": 1
            }
        return character
    };

    getCharacter = function(){
        // view character sheet
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
            "Dagger", "Health Potion", "Lantern"
        ]
        return inventory
    };
    
    levelUp = function(){
        // level up the character 
        character.Level++
        character.MaxHealth += 2    
        character.Health = character.maxHealth
    }

    getLevel = function(){
        // view character level
        console.log("Your level is: ", character.Level)
        return character.Level
    }

    getInventory = function(){
        // view current inventory
        return inventory
    }

    removeItem = function(itemToRemove){
        // remove a random item from inventory
        // let ran = Math.floor(Math.random() * inventory.length);
        // let removed = inventory.splice(ran, 1)[0]
        for (let i = inventory.length - 1; i >= 0; i--) {
            if (inventory[i] === itemToRemove) {
                inventory.splice(i, 1);
                console.log(itemToRemove + " removed from your inventory.")
            }
        }        
        }

    addItem = function(itemToAdd){
        // add an item to inventory based on input
        inventory.push(itemToAdd)
        console.log(itemToAdd + " added to your inventory.")
    }

    repairArmor = function(){
        // resets armor to default
        character.Armor = 100
        console.log("Armor has been repaired.")
    }

    healthCheck = function(){
        // checks current health of character to see if their dead, then respawns wounded

        if (character.Health <= 0){
            console.log("You have died!")
            character.Armor -= 25
            character.Health = character.MaxHealth - 5
            console.log("You have been brought back to live, but are wounded and have damaged armor.")
        } else if (character.Health <= character.MaxHealth / 2){
            console.log("You are below half health! Be Careful!")
        } else {
            console.log("You are ok.")
        }

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
            levelUp()
            return saveCharacter()
        },
        getLevel:function(){
            return getLevel()
        },
        getInventory:function(){
            return getInventory()
        },
        removeItem:function(itemToRemove){
            removeItem(itemToRemove)
            return saveCharacter()
        },
        resetCharacter:function(){
            resetCharacter()
            return saveCharacter()
        },
        getCharacter:function(){
            return getCharacter()
        },
        addItem:function(itemToAdd){
            addItem(itemToAdd)
            return saveCharacter()
        },
        repairArmor:function(){
            repairArmor()
            return saveCharacter()
        },
        healthCheck:function(){
            healthCheck()
            return saveCharacter()
        }
    }
}())


