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
      "<b>Save/b>" +
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

    },
    controller: function($scope) {
      $scope.options = [];

      $scope.addOption = function(){
        $scope.options.push({
          text: ''
        });
      };
    },
    template:
    "<div class='row'>" +
        "<div class='small-12'>" +
            "<input type='text' placeholder='Enter question title..'></input>" + 
            "<create-option-form ng-repeat='option in options' text='option.text'></create-option-form>" +
            "<add-option-button ng-click='addOption()'>" +
        "</div>" +
    "</div>"
  };
});