questManager.initialize();
userManager.initialize();
npcManager.initialize();

$(function(){
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
     
    $("#createNPC").click(function(){
            let level = userManager.getLevel()
            npcManager.createNPC(level)
        });
    
    $("#createBoss").click(function(){
            let level = userManager.getLevel()
            npcManager.createBoss(level)
        });
        
    $("#characterAttack").click(function(){
            let charStrength = userManager.getCharacter().Strength
            let damage = charStrength += 10
            console.log("You deal: " + damage + " damage.")
            // Can hit character health, does not save.
            // Attack should be a NPC and Character sep function, not app.JS
            // Opposite function for regain health from potion / level up
            return damage
        });
    
    $("#npcAttack").click(function(){
        let goblinNPC = npcManager.npcList().find(npcSearch => npcSearch.Type === "Goblin");

        if (goblinNPC) {
            console.log("Found Goblin NPC:", goblinNPC);
            let damage = goblinNPC.Level + 1
            console.log("The Goblin deals " + damage + " damage.");
            return damage
        } else {
            console.log("Goblin NPC not found in the list.");
        }
    });

    $("#checkHealth").click(function(){
        userManager.healthCheck()
    });

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
