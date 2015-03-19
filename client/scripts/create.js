angular.module('create', [])

.directive('addQuestionButton', function() {
  return {
    restrict: 'E',
    scope: {

    },
    template:
    "<button class='tiny'>" +
      "<i class='fa fa-pencil'></i> " +
      "<b>Add another question</b>" +
    "</button>" 
  };
})

.directive('addOptionButton', function() {
  return {
    restrict: 'E',
    scope: {

    },
    template:
    "<button class='tiny'>" +
      "<i class='fa fa-pencil'></i> " +
      "<b>Add option</b>" +
    "</button>" 
  };
})

.directive('saveButton', function(){
  return {
    restrict: 'E',
    scope: {
    },
    template:
    "<button class='tiny'>" +
      "<i class='fa fa-pencil'></i> " +
      "<b>Save</b>" +
    "</button>" 
  };
})


.directive('questionOption', function() {
  return {
    restrict: 'E',
    scope: {
      option: '='
    },
    template:
    "<div ng-bind='option.text'></div>" 
  };
})


.directive('createOptionForm', function() {
  return {
    restrict: 'E',
    scope: {
      text: "="
    },
    template:
    "<input type='text' ng-model='text' placeholder='Enter option title..'></input>"
  };
})


.directive('createQuestionForm', function() {
  return {
    restrict: 'E',
    scope: {
      question:'='
    },
    controller: function($scope) {
      $scope.addOption = function(){
        $scope.question.options.push({
          text: ''
        });
      };
    },
    template:
      "<div class='small-12'>" +
          "<input type='text' ng-model='question.title' placeholder='Enter question title..'></input>" + 
          "<create-option-form ng-repeat='option in question.options' text='option.text'></create-option-form>" +
          "<add-option-button ng-click='addOption()'>" +
      "</div>" 
  };
})


.directive('createQuestionsForm', function(Questions) {
  return {
    restrict: 'E',
    scope: {

    },
    link: function(scope) {
      scope.questions = Questions.questions;
      Questions.bind(scope, 'questions');

      scope.addQuestion = function(){
        Questions.createQuestion();
        Questions.questions.$save();
      }

      scope.save = function() {
        Questions.questions.$save();
      }
    },
    template:
      "<div class='small-12'>" +
          "<create-question-form ng-repeat='question in questions.$asArray()' question='question'></create-question-form>" +
          "<add-question-button ng-click='addQuestion()'></add-question-button>" +
          "<save-button ng-click='save()'></save-button>" + 
      "</div>" 
  };
});