import angular from 'angular';

import RemoteDataService from './remote-data.service';

export default angular.module('services.remote-data', [])
	.service('RemoteDataService', RemoteDataService)
	.name;
