questManager.initialize();
userManager.initialize();
npcManager.initialize();


$(function(){

    let currentNPC = {}

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

    $(".remove_inventory").click(function(){
            let itemToRemove = $(this).text()
            userManager.removeItem(itemToRemove);
    });
    
    $(".add_inventory").click(function(){
            let currentInventory = userManager.getInventory()
            console.log(currentInventory)
            let itemToAdd = $(this).text()
            if (currentInventory.includes(itemToAdd) && itemToAdd != "Health Potion") {
                console.log("Can not carry anymore of that item!")
            } else {
                userManager.addItem(itemToAdd);    
            }
    });
        

    $("#reset_all").click(function(){
            userManager.resetCharacter()
        })
    
    $('#form').on('submit', function(e){
            e.preventDefault(); // Prevent the default form submission
            let questName = $('#questName').val();
            let questText = $('#questText').val();
            let difficulty = $('#difficulty').val();
            let type = $('#type').val();
            questManager.createQuest(questName, questText, difficulty, type);
            return false;
        });
     
    $("#getQuests").click(function(){
        let vPool = getQuestsString("<br />")
        $('#questList').html(vPool);
    });
     
    $("#createNPC").click(function(currentTarget){
        let level = userManager.getLevel()
        currentNPC = npcManager.createNPC(level)
        return currentNPC;
    });
    
    $("#createBoss").click(function(){
        let level = userManager.getLevel()
        let boss = npcManager.createBoss(level)
        return boss
    });
        
    $("#userAttack").click(function() {
        let npcHealth = currentNPC.Health
        let userDamage = Math.floor(Math.random() * (userManager.getCharacter().Level + 2));

        if (npcHealth > 0 && userDamage > 0) {
            currentNPC.Health -= userDamage
            console.log(`You deal ${userDamage} damage to the ${currentNPC.Type} `)
            npcAttack()
        } else if (npcHealth > 0 && userDamage <= 0) {
            console.log("You missed!")
            npcAttack()
        } else if (npcHealth <= 0) {
            console.log(`The ${currentNPC.Type} has been defeated!`)
        }
    });
    

    if ($("#currentNPC").length){
        let vPool = getInventoryString("<br />")
    }

    $("#checkHealth").click(function(){
        userManager.healthCheck()
        });

    $("#repairArmor").click(function(){
        // add cost based on amount to repair
        let currentArmor = userManager.getCharacter().Armor
        if (currentArmor <= 25) {
            // add cost
            userManager.repairArmor()
        } else if (currentArmor <= 50) {
            // add cost
            userManager.repairArmor()
        } else {
            // add cost
            userManager.repairArmor()
        }})

    $("#enhanceArmor").click(function(){
        userManager.enhanceArmor()
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
};

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
};

function getQuestsString(delimiter) {
    // get quest list as a string
    let questList = questManager.getQuests();
    let vPool = "";
    if (questList.length > 0) {
        questList.forEach(quest => {
            vPool += "Quest Name: " + quest[0] + delimiter;
            vPool += "Quest Text: " + quest[1] + delimiter;
            vPool += "Difficulty: " + quest[2] + delimiter;
            vPool += "Type: " + quest[3] + delimiter;
            vPool += "Status: " + quest[4] + delimiter;
            vPool += "<br />"
        });
    } else {
        vPool += "Your quest log is empty!";
    }
    return vPool;
}


function npcAttack() {
    let userLevel = userManager.getCharacter().Level
    let userHealth = userManager.getCharacter().Health
    
    if (userHealth > 0) {
        let npcDamage = Math.floor(Math.random() * (userLevel + 1));
        
        if (npcDamage <= 0){
            console.log(`The ${currentNPC.Type} missed!`)
        } else {
            console.log(`The ${currentNPC.Type} deals ${npcDamage} to you!`)
            userManager.getCharacter().Health -= npcDamage
            userManager.getCharacter().Armor -= 1
        }
    } else {
        userManager.healthCheck()
    }
};

});

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