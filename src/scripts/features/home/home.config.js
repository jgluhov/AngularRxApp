export default function config($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: require('./home.jade')(),
			controller: 'HomeController',
			controllerAs: 'home'
		})
}