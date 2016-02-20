import '../../node_modules/bootstrap/dist/css/bootstrap.css';

window.jQuery = window.$ = require('jquery');

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';

import home from './features/home';

const app = angular.module('app', [uirouter, home])
	.config(config)
	.name;

angular.bootstrap(document, [app]);