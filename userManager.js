var userManager = (function(){
    this.character = {};
    this.inventory = [];

    this.createCharacter = function(){
        // creates character
        let character = {
            "name": "Lord Defaulty",
            "level": 1,
            "experience": 0,
            "health": 10,
            "strength": 1,
            "wisdom": 1,
            "charisma": 1
            }
        return character
    };

    this.getCharacter = function(){
        console.log(this.character)
        return this.character
    }

    this.resetCharacter = function(){
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
        // switch statement for xp levels
       character.level++       
    }

    this.getLevel = function(){
        console.log("Your level is: ", character.level)
    }

    this.getInventory = function(){
        console.log(this.inventory)
        return this.inventory
    }

    this.removeItem = function(){
        let ran = Math.floor(Math.random() * this.inventory.length);
        let removed = this.inventory.splice(ran, 1)[0]
        console.log(removed + " was removed from inventory.")
    }

    this.save = function() {
        var characterString = JSON.stringify(this.character)
        var inventoryString = JSON.stringify(this.inventory)
        localStorage.setItem("character", characterString)
        localStorage.setItem("inventory", inventoryString)
        console.log(this.character.name + " has been saved!")
    }
    
    
    return {
        initalize:function(){
            character = localStorage.getItem("character") === null ? createCharacter() : JSON.parse(localStorage.getItem("character"))
            inventory = localStorage.getItem("inventory") === null ? createInventory() : JSON.parse(localStorage.getItem("inventory"))
        }, 
        levelUp:function(){
            levelUp()
            save()
        },
        getLevel:function(){
            getLevel()
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
            getCharacter()
        }
    }
}())


