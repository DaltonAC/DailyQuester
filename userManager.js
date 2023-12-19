var userManager = (function(){
    this.character = {};
    this.inventory = [];

    this.createCharacter = function(){
        // creates character
        let character = {
            "name": "defauly",
            "level": 1,
            "experience": 0,
            "health": 10,
            "strength": 1,
            "wisdom": 1,
            "charisma": 1
            }
        return character
    };
    
    this.createInventory = function(){
        // creates inventory
        let inventory = [
            "Dagger", "Holy water"
        ]
        return inventory
    };
    
    this.levelUp = function(){
        // level up the character
       character.level++       
    }

    this.getLevel = function(){
        console.log("Your level is: ", character.level)
    }

    this.getInventory = function(){
        console.log(this.inventory)
        return this.inventory
    }

    this.save = function() {
        var characterString = JSON.stringify(this.character)
        var inventoryString = JSON.stringify(this.inventory)
        localStorage.setItem("character", characterString)
        localStorage.setItem("inventory", inventoryString)
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
        }
    }
}())


