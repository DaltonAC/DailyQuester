var npcManager = (function(){
    this.npcList = []

    this.createNPC = function(level){
        // create a NPC
        console.log(level)
        let npc = {
            "name" : "Enemy", // random from pool
            "level": level, // logic to create level based on user level
            "health": 1, // health is based on level
            "attack": 2, // random amount based on its level
            "loot": ["coins", "key"] // array of items here, have it randomly chose from a loot table for that level
        }
        // loot table needed
        console.log(npc)
        this.npcList.push(npc)
        return npc
    };

    this.getNPCs = function(){
        // view all NPCs
        console.log(this.npcList)
        return this.npcList
    };

    this.save = function() {
        // save NPC list
        let npcListString = JSON.stringify(this.npcList)
        localStorage.setItem("npcList", npcListString)
        console.log(this.npcList + " has been saved!")
    }

    return {
        initialize:function(){
            npcList = localStorage.getItem("npcList") === null ? getNPCs() : JSON.parse(localStorage.getItem("npcList"))
        }, 
        createNPC:function(level){
            createNPC(level)
            save()
        },
        npcList:function(){
            getNPCs()
        }
    }
}())
