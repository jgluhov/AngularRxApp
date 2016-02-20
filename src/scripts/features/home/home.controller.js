export default class HomeController {
	constructor($scope, RemoteDataService) {
		this.name = 'Home';
		this.remoteDataService = RemoteDataService;

		this.remoteDataService.messages$.subscribe(data => {
			this.message = data.message;
			$scope.$digest();
		});

		this.remoteDataService.connectionState$.subscribe(state => {
			this.state = state;
			$scope.$digest();
		})
	}

}