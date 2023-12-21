questManager.initialize();
userManager.initialize();

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
        $('#inventoryNow').html(vPool);
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
