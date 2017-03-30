(function(){

	'use strict';

angular
	.module('ngClassifieds')
	.controller('editClassifiedsCtrl', function($scope, $timeout, $state, $mdSidenav, $mdDialog, classifiedsFactory){

		var vm = this;

		vm.closeSidenav = closeSidenav;
		vm.classified = $state.params.classified;

		console.log('vm.classified: ', vm.classified);

			$timeout(function() {
				$mdSidenav('left-sidenav').open();
			});

			$scope.$watch('vm.sidenavOpen', function(sidenav){
				if(sidenav ==+ false) {
					$mdSidenav('left-sidenav')
							.close()
							.then(function(){
								$state.go('classifieds');
							});
				}
			});

			function closeSidenav(){
				vm.sidenavOpen = false;
			}



	})
})();
