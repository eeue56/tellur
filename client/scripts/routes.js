module.exports = function($stateProvider, $urlRouterProvider) {

  // project overview as app
  $urlRouterProvider.otherwise('/create');

  $stateProvider

    .state('create', {
      url: '/create',
      templateUrl: '/partials/create.html'
    })
};
