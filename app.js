userManager.initalize();

$(function(){
    $("#level_up").click(function(){
        userManager.levelUp()
        userManager.getLevel()
    })
    $("#view_inventory").click(function(){
        userManager.getInventory()
        var inventory = userManager.getInventory()
        var vPool="";
        jQuery.each(inventory, function(i, val) {
        vPool += val + "<br />";
        })
        $('#inventory').html(vPool);
    });
})


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
