var routes = require('./routes');

require('./create');
require('./questions');
require('./barrel');

angular.module('tellur', ['ui.router', 'ui.bootstrap',
                               'angularMoment',
                               // reserve above for 3rd party
                               'create', 'questions', 'barrel'
                              ])

.config(routes)

.controller('MainController', function($scope) {
});

