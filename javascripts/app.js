'use strict';

/* App Module */

var addressBookApp = angular.module('addressBookApp', [
  'ui.bootstrap',
  'ngRoute',
  'addressBookControllers',
  'addressBookServices'
]).run(function($rootScope) {
    $rootScope.contacts = new Array();
    loadTestData($rootScope.contacts);
});

addressBookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'htmlviews/contactsList.html',
        controller: 'ListContactsCtrl'
      });
  }]);

function loadTestData(contacts){  
  contacts.push({name:'Adam',surname:'Kowalski',phone:1233211,group:'grupa A',id:0});
  contacts.push({name:'Artur',surname:'Nowak',phone:1233211,group:'grupa B',id:1});
  contacts.push({name:'Bartek',surname:'Pawlak',phone:1233211,group:'grupa C',id:2});
  contacts.push({name:'Magda',surname:'Nowakowska',phone:1233211,group:'grupa D',id:3});
};