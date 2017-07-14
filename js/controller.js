var studlist = angular.module('students-list', []);
studlist.controller ('students-controller', function($scope){
	$scope.records = [{name:'John',surname:'Doe',class:'primary'},{name:'Joe',surname:'Bloggs',class:'success'}, 
            		{name:'John Q.',surname:'Doe', class:'purple'}, {name:'Mary',surname:'Major', class:'info'}, 
          			{name:'Richard',surname:'Miles', class:'warning'}, {name:'Rudolf',surname:'Lingers',class:'danger'},
            		{name:'Alan',surname:'Smithee',class:'primary'}, {name:'Luther',surname:'Blissett',class:'success'}, 
           			{name:'Tommy',surname:'Atkins',class:'purple'}, {name:'Richmond',surname:'Way',class:'info'}, 
           			{name:'Ron',surname:'Sanders',class:'warning'}, {name:'Megan',surname:'Rothmans',class:'danger'},
           			{name:'Tom',surname:'Forest',class:'warning'}, {name:'Rachel',surname:'Stands',class:'danger'},
           			{name:'Walter',surname:'Seems',class:'warning'}, {name:'Peter',surname:'Yang',class:'danger'},
           			{name:'Ruth',surname:'Watkins',class:'warning'}, {name:'Melvin',surname:'Peters',class:'danger'}];
});

var login = angular.module('login-page', ["ui.bootstrap.modal"]);
login.controller ('login-controller', function($scope, $window){
	$scope.submit = function(){
		if($scope.email == 'example@gmail.com' && $scope.password == '123456' ){
			 $window.location.href = 'group-choice.html'
			}
		else { 
			$scope.ErrorAlert = true;					
		};
	};
		$scope.cancel = function() {
  			$scope.ErrorAlert = false;
		};
});