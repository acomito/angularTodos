import _ from "lodash";



export default function($scope, todoFactory){

	var params = {
		createHasInput: false,
	};

	const {createTask, updateTask, deleteTask, watchCreateTaskInput, onCompletedClick } = todoFactory;

	todoFactory.getTasks($scope);




	$scope.createTask = _.partial(createTask, $scope, params);

	$scope.updateTask = _.partial(updateTask, $scope);

	$scope.deleteTask = _.partial(deleteTask, $scope);

	$scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));

	$scope.onCompletedClick = _.partial(onCompletedClick, $scope);


	$scope.onCancelClick = (todo) => {
		todo.isEditing = false;
	};

	$scope.onEditClick = (todo) => {
			todo.isEditing = true;
			todo.updatedTask = todo.task;
	};


/*	$scope.onCompletedClick = (todo) => {
		todo.isCompleted = !todo.isCompleted;
	};*/




};