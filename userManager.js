var userManager = (function(){
    this.character = {};
    this.inventory = [];

    this.createCharacter = function(){
        // create a character
        let character = {
            "name": "Lord Defaulty",
            "level": 1,
            "experience": 0,
            "maxHealth": 10,
            "health": 10,
            "strength": 1,
            "wisdom": 1,
            "charisma": 1
            }
        return character
    };

    this.getCharacter = function(){
        // view character sheet
        console.log(this.character)
        return this.character
    }

    this.resetCharacter = function(){
        // reset character + inventory to default
        this.character = createCharacter()
        this.inventory = createInventory()
        console.log("Character has been reset.")
    }
    
    this.createInventory = function(){
        // creates inventory
        let inventory = [
            "Dagger", "Holy water", "Health potion","Rope"
        ]
        return inventory
    };
    
    this.levelUp = function(){
        // level up the character 
       character.level++       
       character.maxHealth += 2
       character.health = character.maxHealth
    }

    this.getLevel = function(){
        // view character level
        console.log("Your level is: ", character.level)
        return character.level
    }

    this.getInventory = function(){
        // view current inventory
        console.log(this.inventory)
        return this.inventory
    }

    this.removeItem = function(){
        // remove a random item from inventory
        let ran = Math.floor(Math.random() * this.inventory.length);
        let removed = this.inventory.splice(ran, 1)[0]
        console.log(removed + " was removed from inventory.")
    }

    this.save = function() {
        // save character + inventory
        let characterString = JSON.stringify(this.character)
        let inventoryString = JSON.stringify(this.inventory)
        localStorage.setItem("character", characterString)
        localStorage.setItem("inventory", inventoryString)
        console.log(this.character.name + " has been saved!")
    }
    
    
    return {
        initialize:function(){
            character = localStorage.getItem("character") === null ? createCharacter() : JSON.parse(localStorage.getItem("character"))
            inventory = localStorage.getItem("inventory") === null ? createInventory() : JSON.parse(localStorage.getItem("inventory"))
        }, 
        levelUp:function(){
            levelUp()
            save()
        },
        getLevel:function(){
            return getLevel()
        },
        getInventory:function(){
            return getInventory()
        },
        removeItem:function(){
            removeItem()
            save()
        },
        resetCharacter:function(){
            resetCharacter()
            save()
        },
        getCharacter:function(){
            return getCharacter()
        }
    }
}())


