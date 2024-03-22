var npcManager = (function(){
    
    let npc = {};
    
    let lootTable = [
        // NPC loot table
        "Holy water", "Bronze key", "Gold key", "Red key", 
        "Rope", "Lockpick", "Health potion", "Wooden trinket",
        "Lantern", "Broken Key", "Scroll",
        ];   

    let npcType = [
        "Human", "Dwarf", "Elf", "Kobold", "Gnome", "Orc", "Goblin",
        ];

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
        saveNPC();
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
        return bossNPC;
    }

    getNPC = function(){
        // view all NPCs
        console.log(npc)
        return npc;
    };

    saveNPC = function() {
        // save NPC list
        let npcString = JSON.stringify(npc)
        localStorage.setItem("npc", npcString)
    }

    // saveBoss = function() {
    //     let bossString = JSON.stringify(boss)
    //     localStorage.setItem("boss", boss)
    // }

    return {
        initialize:function(){
            npc = localStorage.getItem("npc") === null ? getNPC() : JSON.parse(localStorage.getItem("npc"))
            // boss = localStorage.getItem("boss") === null ? get
        }, 
        createNPC:function(level){
            return createNPC(level)
        },
        createBoss:function(level){
            return createBoss(level)
        },
    }
}())
