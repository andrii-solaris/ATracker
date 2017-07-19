var studlist = angular.module('students-list', []);
studlist.controller ('students-controller', function($scope){
	$scope.records = [{number:'1',name:'John',surname:'Doe',class:'primary', status:'AS'},{number:'2',name:'Joe',surname:'Bloggs',class:'success',status:'AS'},
            		{number:'3',name:'John Q.',surname:'Doe', class:'purple', status:'AS'}, {number:'4',name:'Mary',surname:'Major', class:'info', status:'AFS'},
          			{number:'5',name:'Richard',surname:'Miles', class:'warning', status:'AFS'}, {number:'6',name:'Rudolf',surname:'Lingers',class:'danger', status:'AS'},
            		{number:'7',name:'Alan',surname:'Smithee',class:'primary', status:'AFS'}, {number:'8',name:'Luther',surname:'Blissett',class:'success', status:'AS'},
           			{number:'9',name:'Tommy',surname:'Atkins',class:'purple', status:'AS'}, {number:'10',name:'Richmond',surname:'Way',class:'info', status:'AS'},
           			{number:'11',name:'Ron',surname:'Sanders',class:'warning', status:'AFS'}, {number:'12',name:'Megan',surname:'Rothmans',class:'danger', status:'AS'},
           			{number:'13',name:'Tom',surname:'Forest',class:'warning', status:'AS'}, {number:'14',name:'Rachel',surname:'Stands',class:'danger', status:'AS'},
           			{number:'15',name:'Walter',surname:'Seems',class:'warning', status:'AFS'}, {number:'16',name:'Peter',surname:'Yang',class:'danger', status:'AS'},
           			{number:'17',name:'Ruth',surname:'Watkins',class:'warning', status:'AFS'}, {number:'18',name:'Melvin',surname:'Peters',class:'danger', status:'AS'}];
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
