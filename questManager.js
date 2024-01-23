let questManager = (function(){
    
    let questList = []

    createQuest = function(questName, questText, difficulty){
        // create a quest
        let quest = [questName, questText, difficulty]
        this.questList.push(quest)
        console.log("Created quest: " + quest.questName)
        return quest
    };

    getQuests = function(){
        // view all quests
        console.log("Current quest list: " + questList)
        return questList
    };

    saveQuests = function() {
        // save quest list
        let questListString = JSON.stringify(questList)
        localStorage.setItem("questList", questListString)
        console.log(questList + " has been saved!")
    }

    return {
        initialize:function(){
            // allow saving of quest list
            questList = localStorage.getItem("questList") === null ? getQuests() : JSON.parse(localStorage.getItem("questList"))
        }, 
        createQuest:function(questName, questText, difficulty){
            createQuest(questName, questText, difficulty)
            saveQuests()
        },
        getQuests:function(){
            return getQuests()
        }
    }
}())
