angular.module('tech-talk')

/*service.saveAnswers = function(answers){
    var promises = [];

    angular.forEach(answers, function(answer, questionId){
        promises.push(
            AnswersResource.save(questionId, {
                answer: answer,
                question_id: questionId
            })
        );
    });

    return $q.all(promises).then(function(results){
        return results;
    });
};*/