import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todosController from 'todos/todos';
import todoFactory from 'factories/todo-factory';
import todoForm from 'directives/todoForm/todoForm.directive.js';
import navbar from 'directives/navbar.directive.js';

const app = angular.module('app', [
	uiRouter,  
	todoFactory.name, 
	todoForm.name, 
	navbar.name, 
	]);


app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('todos', {
			url: '/',
			template: require('todos/todos.html'),
			controller: todosController
		})
		.state('about', {
			url: '/about',
			template: require('about/about.html')
		});

		$locationProvider.html5Mode(true);

});


export default app;