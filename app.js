questManager.initialize();
userManager.initialize();
npcManager.initialize();

$(function(){
    $("#level_up").click(function(){
        userManager.levelUp()
        userManager.getLevel()
    })

    $("#view_character").click(function(){
        userManager.getCharacter()
    });

    $("#view_inventory").click(function(){
        let vPool = getInventoryString("<br />")
        $('#inventory').html(vPool);
    });

    if ($("#inventoryNow").length){
        let vPool = getInventoryString("<br />")
    }

    $("#remove_inventory").click(function(){
            userManager.removeItem()
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
