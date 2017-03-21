// criar modulo com o nome todoApp, sem dependencias
var app = window.angular.module('myApp', []);

// criar um controlador atraves de uma funcao de callback
// (argumento de app.controller
app.controller('LoginController', function($scope, $http) {
    $scope.usersList = [];

    $scope.login = function() {
        $http.get('http://192.168.1.29:8080/springwebmvc/api/users')
            .then(function(response) {
                $scope.usersList = response.data;
            }, function() {
                console.log('ERROR ON GET');
            });

        //console.log('Email: ' + $scope.loginEmail + ' Password: ' + $scope.loginPassword);
        //console.log($scope.usersList);

				var email;
        $scope.usersList.forEach(function(element) {
            for (var key in element) {
              if(key == 'email'){
								email = element[key];
							}

            }
						if($scope.loginEmail == email){
							console.log("Login Successful on user: " + element);
						}
						else {
							console.log("NO LOGIN");
						}
        });


    }

    $scope.addTodo = function() {

        if (!$scope.newTodo) {
            return;
        }

        var newTodo = {
            text: $scope.newTodo,
            done: false
        }

        $scope.todoList.push(newTodo);

        $scope.newTodo = '';
    }

});
