'use strict';

var addressBookServices = angular.module('addressBookServices', []);

addressBookServices.service('contactService',['$rootScope',function($rootScope){
	this.create =  function(contact){		    
	    contact.id = $rootScope.contacts.length;
		$rootScope.contacts.push(contact);		
	};

	this.edit = function(contact){
		$rootScope.contacts[contact.id] = contact;
	};

}]);