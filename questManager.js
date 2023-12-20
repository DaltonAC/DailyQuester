var questManager = (function(){
    this.questList = []

    this.createQuest = function(questName, questText, difficulty){
        // creates quest
        let quest = [questName, questText, difficulty]
        console.log(quest)
        questList.push(quest)
        return quest
    };

    this.questList = function(){
        console.log(this.questList)
        return this.questList
    };

    return {
        initialize: function() {},
        createQuest: createQuest, // Return the function reference
        questList: questList // Return the questList variable
    }
}())
