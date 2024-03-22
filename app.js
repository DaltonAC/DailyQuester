questManager.initialize();
userManager.initialize();
npcManager.initialize();


$(function(){

    let currentTarget = {}

    $("#level_up").click(function(){
        userManager.levelUp()
        userManager.getLevel()
    })

    $("#view_character").click(function(){
        let vPool = getCharacterString("<br />")
        $('#character').html(vPool);
    });

    $("#view_inventory").click(function(){
        let vPool = getInventoryString("<br />")
        $('#inventory').html(vPool);
    });

    if ($("#inventoryNow").length){
        let vPool = getInventoryString("<br />")
    }

    $("#remove_inventory").click(function(){
            let itemToRemove = $(this).text()
            userManager.removeItem(itemToRemove)
        })
    
    $("#add_inventory").click(function(){
            let itemToAdd = $(this).text()
            console.log(itemToAdd)
            userManager.addItem(itemToAdd);
        })

    $("#reset_all").click(function(){
            userManager.resetCharacter()
        })
    
    $('#form').on('submit', function(e){
            e.preventDefault(); // Prevent the default form submission
            let questName = $('#questName').val();
            let questText = $('#questText').val();
            let difficulty = $('#difficulty').val();
            let type = $('type').val();
            questManager.createQuest(questName, questText, difficulty, type);
            return false;
        });
     
    $("#getQuests").click(function(){
            let vPool = getQuestsString("<br />")
            $('#questList').html(vPool);
        });
     
    $("#createNPC").click(function(currentTarget){
            let level = userManager.getLevel()
            let NPC = npcManager.createNPC(level)
            console.log(NPC)
        });
    
    $("#createBoss").click(function(){
            let level = userManager.getLevel()
            npcManager.createBoss(level)
        });
        
    $("#userAttack").click(function() {
            console.log(currentTarget)
        });
    
    $("#npcAttack").click(function(){
        // redo
        });

    if ($("#currentNPC").length){
        let vPool = getInventoryString("<br />")
    }

    $("#checkHealth").click(function(){
        userManager.healthCheck()
        });

    $("#repairArmor").click(function(){
        userManager.repairArmor()
        })

    $("#enhanceArmor").click(function(){
        userManager.enhanceArmor()
        })
})

function getInventoryString(delimiter) {
    // get inventory as a string
    let inventory = userManager.getInventory()
    let vPool="";
    if (inventory.length > 0) {
        jQuery.each(inventory, function(i, val) {
        vPool += val + delimiter;
    });
    } else {
        vPool += "Your inventory is empty!";
    }
    return vPool;
}

function getCharacterString(delimiter) {
    // get character info as a string
    let character = userManager.getCharacter()
    let vPool="";
    if (character) {
        for (let key in character)
            if (character.hasOwnProperty(key)) {
                vPool += key.charAt(0).toUpperCase() + key.slice(1) + ": " + character[key] + delimiter;
            }
    } else {
        vPool += "No character found!";
    }
    return vPool;
}

function getQuestsString(delimiter) {
    // get quest list as a string
    let questList = questManager.getQuests()
    let vPool="";
    if (questList.length > 0) {
        jQuery.each(questList, function(i, val) {
        vPool += val + delimiter;
    });
    } else {
        vPool += "Your quest log is empty!";
    }
    return vPool;
}

// function getNPC(delimter, npcType) {
//     let NPC = npcManager.npcList().find(npcSearch => npcSearch.Type === npcType);
//     console.log(NPC);
//     let vPool = "";
//     if (NPC) {
//         vPool += `<div>${NPC.Name}</div>`;
//         vPool += `<button class="attackButton" onclick="userAttack(${JSON.stringify(NPC)})">Attack</button>`;
//     } else {
//         vPool += "No Goblin NPC found.";
//     }
//     return { html: vPool, npc: NPC };
// }



// function npcAttack(npc) {
//     if (npc) {
//         console.log("Found NPC:", npc);
//         let damage = npc.Level + 1;
//         console.log("The NPC deals " + damage + " damage.");
//         userManager.getCharacter().Health -= damage;
//     } else {
//         console.log("NPC not found.");
//     }
// }

// function userAttack(NPC) {
//     if (NPC) {
//         let charStrength = userManager.getCharacter().Strength;
//         let damage = charStrength + 10;
//         console.log("You deal: " + damage + " damage to " + NPC.Name + ".");
//         NPC.Health -= damage;
//         console.log(NPC);
//     } else {
//         console.log("Invalid NPC object.");
//     }
// }