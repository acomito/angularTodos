import angular from 'angular';

let navbarFunc = function() {

	  return {
	  	restrict: 'E',
	    template: '	<a class="nav-link" ui-sref="about">about this page</a><h2>ToDo App</h2>'
	  };

};

const navbar = angular.module('app.navbar', [])
	.directive('navbar', navbarFunc);

export default navbar;