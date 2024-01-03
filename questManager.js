var questManager = (function(){
    this.questList = []

    this.createQuest = function(questName, questText, difficulty){
        // creates quest
        let quest = [questName, questText, difficulty]
        this.questList.push(quest)
        console.log("All Quests: " + this.questList) // have it just names of quests
        return quest
    };

    this.getQuests = function(){
        // view all quests
        console.log(this.questList)
        return this.questList
    };

    this.createQuestList = function(){
        let questList = []
        return questList
    }

    return {
        initialize:function(){
            // allow saving of questList
            questList = localStorage.getItem("questList") === null ? getQuests() : JSON.parse(localStorage.getItem("questList"))
        }, 
        createQuest:function(questName, questText, difficulty){
            createQuest(questName, questText, difficulty)
            getQuests()
        },
        getQuests:function(){
            return getQuests()
        }
    }
}())
