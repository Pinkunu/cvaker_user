var App = {
    init: function () {
        this.ng = angular.module('cvaker_profile', ['ngRoute', 'ngResource']);


        this.ng.config(function ($routeProvider) {
            $routeProvider
                    .when("/", {
                        templateUrl: "templates/home.html",
                    })
                    .when("/profile", {
                        templateUrl: "templates/profile.html",
                        controller: "profile_controller"
                    })
                    .when("/profile2", {
                        templateUrl: "templates/profile2.html",
                        controller: "myprofile_controller"
                    })
                    .when("/forms", {
                        templateUrl: "templates/forms.html",
                        controller: "myform_controller"
                    });
        });




        this.ng.factory('Profile', function ($resource) {
            return $resource('/service/profile/:id', {id: "@id"},
                    {
                        'get': {method: 'GET', id: "@id"},
                        'save': {method: 'POST'},
                        'getAll': {method: 'GET', isArray: true},
                        'remove': {method: 'DELETE'},
                        'create': {method: 'PUT'}
                    });
        });
        this.ng.factory('Avtar', function ($resource) {
            return $resource('/service/avtar/:id', {id: "@id"},
                    {
                        'get': {method: 'GET', id: "@id"},
                        'save': {method: 'POST'},
                        'getAll': {method: 'GET', isArray: true},
                        'remove': {method: 'DELETE'},
                        'create': {method: 'PUT'}
                    });
        });
    }
};
App.init();
