app.config(function($routeProvider) {
	$routeProvider
	.when('/routes/default', {
	templateUrl: 'partials/default.html',
	controller: 'RoutesDefaultCtrl'
	})
	.when('/routes/blueridgeparkway', {
		templateUrl: 'partials/routes-blueridgeparkway.html',
		controller: 'RoutesBlueCtrl'
	})
	.when('/routes/hwy66', {
	templateUrl: 'partials/routes-hwy66.html',
	controller: 'RoutesHwyCtrl'
	})
	.otherwise('/routes/default');
});
