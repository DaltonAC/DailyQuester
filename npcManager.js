var npcManager = (function(){
    this.npcList = []
    
    let lootTable = [
        // NPC loot table
        "Holy water", "Bronze key", "Gold key", "Red key", 
        "Rope", "Lockpick", "Health potion", "Wooden trinket",
    ]

    let npcType = [
        "Human", "Dwarf", "Elf", "Kobold", "Gnome", "Orc", "Goblin",
    ]

    this.createNPC = function(level){
        // create a NPC
        let charLevel = level
        let npc = {
            "name" : "Enemy", // random from pool
            "level": Math.floor(Math.random() * 3) + (charLevel - 1), // logic to create level based on user level
            "health": 10, // health is based on level
            "attack": 2, // random amount based on its level
            "type": npcType[Math.floor(Math.random() * npcType.length)], // type of NPC
            "loot": lootTable[Math.floor(Math.random() * lootTable.length)], // random from loot table above
        }
        console.log(npc)
        this.npcList.push(npc)
        return npc
    };

    this.createBoss = function(level){
        // create a boss
        let charLevel = level
        let bossNPC= {
            "name" : "Boss", // random from pool
            "level": charLevel += 2, // boss is 2 levels higher than character
            "health": 15, // health is based on level
            "attack": 3, // random amount based on its level
            "loot": lootTable[Math.floor(Math.random() * lootTable.length)], // random from loot table above
        }
        console.log(bossNPC)
        this.npcList.push(bossNPC)
        return bossNPC
    }

    this.getNPCs = function(){
        // view all NPCs
        console.log(this.npcList)
        return this.npcList
    };

    this.save = function() {
        // save NPC list
        let npcListString = JSON.stringify(this.npcList)
        localStorage.setItem("npcList", npcListString)
    }

    return {
        initialize:function(){
            npcList = localStorage.getItem("npcList") === null ? getNPCs() : JSON.parse(localStorage.getItem("npcList"))
        }, 
        createNPC:function(level){
            createNPC(level)
            save()
        },
        createBoss:function(level){
            createBoss(level)
            save()
        },
        npcList:function(){
            getNPCs()
        }
    }
}())
