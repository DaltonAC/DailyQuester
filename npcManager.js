var npcManager = (function(){
    
    let npcList = []
    
    let lootTable = [
        // NPC loot table
        "Holy water", "Bronze key", "Gold key", "Red key", 
        "Rope", "Lockpick", "Health potion", "Wooden trinket",
        ]   

    let npcType = [
        "Human", "Dwarf", "Elf", "Kobold", "Gnome", "Orc", "Goblin",
        ]

    createNPC = function(level){
        // create a NPC
        let charLevel = level
        let npc = {
            "name" : "Enemy", // random from pool
            "level": Math.floor(Math.random() * 3) + (charLevel - 1), // logic to create level based on user level
            "health": 10 + level, // health is based on level
            "type": npcType[Math.floor(Math.random() * npcType.length)], // type of NPC
            "loot": lootTable[Math.floor(Math.random() * lootTable.length)], // random from loot table above
        }
        console.log(npc)
        npcList.push(npc)
        return npc
    };

    createBoss = function(level){
        // create a boss
        let charLevel = level
        let bossNPC = {
            "name" : "Boss", // random from pool
            "level": charLevel += 2, // boss is 2 levels higher than character
            "health": 15, // health is based on level
            "loot": lootTable[Math.floor(Math.random() * lootTable.length)], // random from loot table above
        }
        console.log(bossNPC)
        npcList.push(bossNPC)
        return bossNPC
    }

    getNPCs = function(){
        // view all NPCs
        console.log(npcList)
        return npcList
    };

    saveNPC = function() {
        // save NPC list
        let npcListString = JSON.stringify(npcList)
        localStorage.setItem("npcList", npcListString)
    }

    return {
        initialize:function(){
            npcList = localStorage.getItem("npcList") === null ? getNPCs() : JSON.parse(localStorage.getItem("npcList"))
        }, 
        createNPC:function(level){
            createNPC(level)
            saveNPC()
        },
        createBoss:function(level){
            createBoss(level)
            saveNPC()
        },
        npcList:function(){
            getNPCs()
        }
    }
}())
