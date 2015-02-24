var routes = require('./routes');

require('./create');

angular.module('tellur', ['ui.router', 'ui.bootstrap',
                               'angularMoment',
                               // reserve above for 3rd party
                               'create'
                              ])

.config(routes)

.controller('MainController', function($scope) {
});

