export default function config($urlRouterProvider, $locationProvider, $compileProvider) {
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);

	$compileProvider.debugInfoEnabled(process.env.NODE_ENV === 'development');
}
