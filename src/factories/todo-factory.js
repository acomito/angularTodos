import angular from 'angular';
import _ from 'lodash';





let todoFactoryFunc = function($http) {
	


    function getTasks($scope) {
        $http.get('/todos').success(response => {
            $scope.todos = response.todos;
        });
    }

	function createTask($scope, params){

      if (!$scope.createTaskInput) { return; }

        $http.post('/todos', {
            task: $scope.createTaskInput,
            isCompleted: false,
            isEditing: false
        }).then(response => {
           getTasks($scope);
            $scope.createTaskInput = '';

        });
	};

	function updateTask($scope, todo){
		let requestBody = {
			task: todo.updatedTask,
		};
		$http.put('/todos/' + todo._id, requestBody).then(function(response){
			getTasks($scope);
			todo.isEditing = false;
		});
	};

	function deleteTask($scope, todoToDelete){
		$http.delete('/todos/' + todoToDelete._id).then((response) => {
			getTasks($scope);
			console.log(response.data);
		});
	};



	function onCompletedClick($scope, todo){

		todo.isCompleted = !todo.isCompleted;
		let isComplete = todo.isCompleted;
		let requestBody = { isCompleted: isComplete };

		$http.put('/todos/checkbox/' + todo._id, requestBody).then(function(response){
			getTasks($scope);
		});
	};
	

    function watchCreateTaskInput(params, $scope, val) {
        const createHasInput = params.createHasInput;

        if (!val && createHasInput) {
            $scope.todos.pop();
            params.createHasInput = false;
        } else if (val && !createHasInput) {
            $scope.todos.push({ task: val, isCompleted: false });
            params.createHasInput = true;
        } else if (val && createHasInput) {
            $scope.todos[$scope.todos.length - 1].task = val;
        }
    }

	return {
		createTask,
		updateTask,
		deleteTask,
		watchCreateTaskInput,
		getTasks,
		onCompletedClick
	};

};

const todoFactory = angular.module('app.todoFactory', [])
	.factory('todoFactory', todoFactoryFunc);

export default todoFactory;