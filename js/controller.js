var studlist = angular.module('students-list', []);
studlist.controller ('students-controller', function($scope){
	$scope.records = [{number:'1',name:'John',surname:'Doe',class:'primary', status:'UA'},{number:'2',name:'Joe',surname:'Bloggs',class:'success',status:'UA'},
            		{number:'3',name:'John Q.',surname:'Doe', class:'purple', status:'UA'}, {number:'4',name:'Mary',surname:'Major', class:'info', status:'UA'},
          			{number:'5',name:'Richard',surname:'Miles', class:'warning', status:'UA'}, {number:'6',name:'Rudolf',surname:'Lingers',class:'danger', status:'UA'},
            		{number:'7',name:'Alan',surname:'Smithee',class:'primary', status:'UA'}, {number:'8',name:'Luther',surname:'Blissett',class:'success', status:'UA'},
           			{number:'9',name:'Tommy',surname:'Atkins',class:'purple', status:'UA'}, {number:'10',name:'Richmond',surname:'Way',class:'info', status:'UA'},
           			{number:'11',name:'Ron',surname:'Sanders',class:'warning', status:'UA'}, {number:'12',name:'Megan',surname:'Rothmans',class:'danger', status:'UA'},
           			{number:'13',name:'Tom',surname:'Forest',class:'warning', status:'UA'}, {number:'14',name:'Rachel',surname:'Stands',class:'danger', status:'UA'},
           			{number:'15',name:'Walter',surname:'Seems',class:'warning', status:'UA'}, {number:'16',name:'Peter',surname:'Yang',class:'danger', status:'UA'},
           			{number:'17',name:'Ruth',surname:'Watkins',class:'warning', status:'UA'}, {number:'18',name:'Melvin',surname:'Peters',class:'danger', status:'UA'}];
});

var login = angular.module('login-page', ["ui.bootstrap.modal"]);
login.controller ('login-controller', function($scope, $window){
	$scope.submit = function(){
		if($scope.email == 'example@gmail.com' && $scope.password == '123456' ){
			 $window.location.href = 'group-choice.html'
			}
		else {
			$('#ErrorAlert').modal('show');
		};
	};
		$scope.cancel = function() {
  			$('#ErrorAlert').modal('hide');
		};
});
