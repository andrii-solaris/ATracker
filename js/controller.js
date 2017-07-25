var studlist = angular.module('students-list', []);
studlist.controller ('students-controller', function($scope, $http, $window){
	$http.get('http://127.0.0.1/ATracker/js/simple-database.json')
	.then(function(response) {
		$scope.records = eval(localStorage.getItem("stGroup"));
	});
		$scope.return_to_group = function(){
		$window.location.href = 'group-choice.html';
	};
		$scope.student_click = function(){
			$window.location.href = "pin.html";			
		}
});

var login = angular.module('login-page', ["ui.bootstrap.modal"]);
login.controller ('login-controller', function($scope, $window){
	$scope.submit = function(){
		if($scope.email == 'example@gmail.com' && $scope.password == '123456' ){
			 $window.location.href = 'group-choice.html'
		}
		else if($scope.email == 'teacher@gmail.com' && $scope.password == '654321') {
			$window.location.href = "statistics.html";
		}
		else {
			$('#ErrorAlert').modal('show');
		};
	};
		$scope.cancel = function() {
  			$('#ErrorAlert').modal('hide');
		};
});

var groupChoice = angular.module('group-choice-app',[]);
groupChoice.controller ('group-choice-controller', function ($scope, $window) {
	$scope.orange_submit = function(){
		$window.location.href = 'students.html';
		localStorage.setItem("stGroup", "response.data.information." + "orange");
	}

	$scope.green_submit = function(){
		$window.location.href = 'students.html';
		localStorage.setItem("stGroup", "response.data.information." + "green");
	}

	$scope.blue_submit = function(){
		$window.location.href = 'students.html';
		localStorage.setItem("stGroup", "response.data.information." + "blue");
	}

	$scope.purple_submit = function(){
		$window.location.href = 'students.html';
		localStorage.setItem("stGroup", "response.data.information." + "purple");
	}

	$scope.red_submit = function(){
		$window.location.href = 'students.html';
		localStorage.setItem("stGroup", "response.data.information." + "red");
	}
});
