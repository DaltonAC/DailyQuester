var npcManager = (function(){
    
    let npcList = []
    
    let lootTable = [
        // NPC loot table
        "Holy water", "Bronze key", "Gold key", "Red key", 
        "Rope", "Lockpick", "Health potion", "Wooden trinket",
        "Lantern", "Broken Key", "Scroll",
        ]   

    let npcType = [
        "Human", "Dwarf", "Elf", "Kobold", "Gnome", "Orc", "Goblin",
        ]

    let Goblins = [
        // level 1-5 Goblins
        {
            "Name": "Lowbie Goblin",
            "Level": 1,
            "Health": 3,
            "Type": "Goblin",
            "Loot": "Junk Mail",
        }
    ]
    createNPC = function(level){
        // create a NPC
        let charLevel = level
        let npc = {
            "Name" : "Enemy", // random from pool
            "Level": Math.floor(Math.random() * 3) + (charLevel - 1), // logic to create level based on user level
            "Health": 10 + level, // health is based on level
            "Type": npcType[Math.floor(Math.random() * npcType.length)], // type of NPC
            "Loot": lootTable[Math.floor(Math.random() * lootTable.length)], // random from loot table above
        }
        console.log(npc)
        npcList.push(npc)
        return npc
    };

    createBoss = function(level){
        // create a boss
        let charLevel = level
        let bossNPC = {
            "Name" : "Boss", // random from pool
            "Level": charLevel += 2, // boss is 2 levels higher than character
            "Health": 15, // health is based on level
            "Loot": lootTable[Math.floor(Math.random() * lootTable.length)], // random from loot table above
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
            return saveNPC()
        },
        createBoss:function(level){
            createBoss(level)
            return saveNPC()
        },
        npcList:function(){
            getNPCs()
            return Goblins
        },
    }
}())
