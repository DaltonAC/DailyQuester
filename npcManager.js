var npcManager = (function(){
    this.npcList = []

    this.createNPC = function(userLevel){
        // creates quest
        let npc = {
            "name" : "",
            "level": 0, // logic to create level based on user level
            "health": 0, // health is based on level
            "attack": 0, // random amount based on its level
            "loot": [] // array of items here, have it randomly chose from a loot table for that level
        }
        // level table needed
        // loot table needed
        // health table needed
        console.log(npc)
        this.npcList.push(npc)
        return npc
    };

    this.getNPCs = function(){
        // view all npcs created
        console.log(this.npcList)
    };

    return {
        initialize:function(){
            // need saving function for npc list
        }, 
        createNPC:function(){
            createNPC()
            getNPCs()
        },
        npcList:function(){
            getNPCs()
        }
    }
}())
