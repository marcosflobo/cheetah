(function () {
    'use strict';

    angular
        .module('cheetahApp', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.html',
                controllerAs: 'vm'
            })
            .when('/burndows', {
                controller: 'BurndownsController',
                templateUrl: 'burndowns/burndowns.html',
                controllerAs: 'vm'
            })
            .when('/release_burndowns', {
                controller: 'ReleaseBurndownsController',
                templateUrl: 'release_burndowns/release_burndowns.html',
                controllerAs: 'vm'
            })
            .when('/velocity', {
                controller: 'VelocityController',
                templateUrl: 'velocity/velocity.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();