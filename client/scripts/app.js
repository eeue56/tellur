var routes = require('./routes');

angular.module('tellur', ['ui.router', 'ui.bootstrap',
                               'angularMoment',
                               // reserve above for 3rd party
                              ])

.config(routes)

.controller('MainController', function($scope) {
});

