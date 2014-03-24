'use strict';

/* Controllers */

var addressBookControllers = angular.module('addressBookControllers', []);

addressBookControllers.controller('ListContactsCtrl', ['$scope','$rootScope','$modal','contactService',
    function($scope, $rootScope,$modal, contactService) {   
      console.log($rootScope.contacts);   

      $scope.createOpen = function () {

  	    var modalInstance = $modal.open({
  	      templateUrl: 'newContact.html',
  	      controller: 'NewContactCtrl'
  	    });
  	};

  	$scope.editOpen = function (editedId) {		
  		$scope.editedId = editedId;
  	    var modalInstance = $modal.open({
  	      templateUrl: 'editContact.html',
  	      controller: 'EditContactCtrl',
  	      resolve: {
                      contactId: function () {
                          return editedId;
                      }
              }
  	    });
  	};

    $scope.orderProp = 'group';

  }]);

addressBookControllers.controller('EditContactCtrl', ['$scope','$rootScope','$modalInstance','$routeParams', '$location', 'contactService', 'contactId',   
    function($scope, $rootScope,$modalInstance, $routeParams, $location, contactService, contactId) {         

      $scope.contact =  $rootScope.contacts[contactId]; 

      $scope.submit = function() {             
          contactService.edit($scope.contact);
          $modalInstance.close();    
        }; 

      $scope.cancelModal = function(){
        $modalInstance.close();
      };
                 
  }]);

addressBookControllers.controller('NewContactCtrl', ['$scope','$rootScope','$modalInstance','$routeParams', '$location', 'contactService',
    function($scope, $rootScope,$modalInstance, $routeParams, $location, contactService) {      
      
      var contactNew = {
    	id : null,
    	name : '',
    	surname : '',
    	phone : null,
    	group : ''
    	};

        $scope.contact = angular.copy(contactNew);        

        $scope.submit = function() {             
          contactService.create($scope.contact);
          $modalInstance.close();   
        }; 

        $scope.cancelModal = function(){
          $modalInstance.close();
        };
                 
  }]);

