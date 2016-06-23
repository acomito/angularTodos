import angular from 'angular';

let todoFormFunc = function() {

	  return {
	  	restrict: 'E',
	    template: '<form ng-submit="createTask()"><input ng-model="createTaskInput" class="form-control todos__create-input" placeholder="what do i need to do?"><button class="btn btn-success todos__create-button">Add Task</button></form>'
	  };

};

const todoForm = angular.module('app.todoForm', [])
	.directive('todoForm', todoFormFunc);

export default todoForm;