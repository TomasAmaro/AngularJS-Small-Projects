// criar modulo com o nome todoApp, sem dependencias
var app = window.angular.module('todoApp', []);

// criar um controlador atraves de uma funcao de callback
// (argumento de app.controller
app.controller('TodoCtrl', function($scope) {

$scope.todoList=[];

$scope.clean = function(){
$scope.todoList =	$scope.todoList.filter(function(todo){
		return !todo.done;
	})
}

$scope.addTodo = function(){

	if(!$scope.newTodo){
		return;
	}

	var newTodo = {
	text: $scope.newTodo,
	done: false
	}

	$scope.todoList.push(newTodo);

	$scope.newTodo ='';
}

});
