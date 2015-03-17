angular.module('questions', [])

.service('Questions', function(Barrel) {
  this.questions = Barrel.child('questions');

  this.createQuestion = function(){
    console.log("Here", this.questions);

    this.questions.$push({
      title: '',
      options: []
    });

    this.questions.$save();
  };

  this.addQuestion = function(question){
    this.questions.$push(question);
  };

  this.bind = function(scope, name){
    var me = this;

    scope.$watch(function(){ return scope[name]; }, function(oldValue, newValue){
      //me.questions.$update(newValue);
    });
  };

  return this;
});