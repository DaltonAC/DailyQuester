var questManager = (function(){
    this.questList = []

    this.createQuest = function(questName, questText, difficulty){
        // creates quest
        let quest = [questName, questText, difficulty]
        console.log(quest)
        this.questList.push(quest)
        console.log("All Quests: " + this.questList) // have it just names of quests
        return quest
    };

    this.getQuests = function(){
        // view all quests
        console.log(this.questList)
    };

    return {
        initialize:function(){
            // allow saving of questList
            // questList = localStorage.getItem("questList") === null ? getQuests() : JSON.parse(localStorage.getItem("questList"))
        }, 
        createQuest:function(questName, questText, difficulty){
            createQuest(questName, questText, difficulty)
            getQuests()
        },
        questList:function(){
            getQuests()
        }
    }
}())
