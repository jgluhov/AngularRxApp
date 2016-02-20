import angular from 'angular';
import uirouter from 'angular-ui-router';

import RemoteData from './../../services/remote-data';

import config from './home.config';
import HomeController from './home.controller';

export default angular.module('app.home', [uirouter, RemoteData])
	.config(config)
	.controller('HomeController', HomeController)
	.name;
