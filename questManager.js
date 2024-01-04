var questManager = (function(){
    this.questList = []

    this.createQuest = function(questName, questText, difficulty){
        // create a quest
        let quest = [questName, questText, difficulty]
        this.questList.push(quest)
        console.log("Created quest: " + quest.questName)
        return quest
    };

    this.getQuests = function(){
        // view all quests
        console.log("Current quest list: " + this.questList)
        return this.questList
    };

    this.save = function() {
        // save quest list
        let questListString = JSON.stringify(this.questList)
        localStorage.setItem("questList", questListString)
        console.log(this.questList + " has been saved!")
    }

    return {
        initialize:function(){
            // allow saving of quest list
            questList = localStorage.getItem("questList") === null ? getQuests() : JSON.parse(localStorage.getItem("questList"))
        }, 
        createQuest:function(questName, questText, difficulty){
            createQuest(questName, questText, difficulty)
            save()
        },
        getQuests:function(){
            return getQuests()
        }
    }
}())
