let questManager = (function(){
    
    let questList = []

    createQuest = function(questName, questText, difficulty, type, status = "Started"){
        // create a quest
        let quest = [questName, questText, difficulty, type, status]
        questList.push(quest)
        console.log("Created quest: " + quest.questName)
        return quest
    };

    getQuests = function(){
        // view all quests
        console.log("Current quest list: " + questList)
        return questList
    };

    CompleteQuest = function(quest) {
        
        // mark quest as complete from questList
        // or remove quest from questList instead
        // update character experaince + stats?
    }

    saveQuests = function() {
        // save quest list
        let questListString = JSON.stringify(questList)
        localStorage.setItem("questList", questListString)
        console.log(questList + " has been saved!")
    }

    return {
        initialize:function(){
            // allow saving of quest list
            // save functiom not working on refresh
            // see inventory management save
            questList = localStorage.getItem("questList") === null ? questList : JSON.parse(localStorage.getItem("questList"))
        }, 
        createQuest:function(questName, questText, difficulty, type, status){
            createQuest(questName, questText, difficulty, type, status)
            saveQuests()
        },
        getQuests:function(){
            return getQuests()
        }
    }
}())
