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

    this.getInvetory = function(){
        console.log("Your inventory is: ", this.inventory)
    }
    return {
        initalize:function(){
            character = createCharacter()
            inventory = createInventory()
        }, 
        levelUp:function(){
            levelUp()
        },
        getLevel:function(){
            getLevel()
        },
        getInvetory:function(){
            getInvetory()
        }
    }
}())


