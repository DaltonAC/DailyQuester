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
            questManager.createQuest(questName, questText, difficulty);
            return false;
        });
     
    $("#getQuests").click(function(){
            let vPool = getQuestsString("<br />")
            $('#questList').html(vPool);
        });
     
    $("#createNPC").click(function(){
            let level = userManager.getLevel()
            console.log("user is level: ", level)
            npcManager.createNPC(level)
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










// fetch('./user.json')
//     .then((response) => response.json())
//     .then((json) => jsonResult = json);

// var userInfo;

// // function getUserData() {
// //         fetch("./user.json")
// //             .then((res) => {v
// //             return res.json();
// //         })
// //        .then((data) => userInfo = data);
    
// //     };

// // getUserData()

// console.log(userInfo)
// var level = userInfo.character.level

// var levelUp = async function() {
//     // Level up button for testing
//     level++; 
//     console.log(level);
// }

// async function fetchData() {
//     const response = await fetch("./user.json")
//     const json = response.json();
//     return json
// }

// fetchData()
