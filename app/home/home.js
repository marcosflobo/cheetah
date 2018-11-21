(function () {
    'use strict';

    angular
        .module('cheetahApp')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$location', '$rootScope', 'FlashService'];
    function HomeCtrl($location, $rootScope, FlashService) {
        var vm = this;

    }

})();