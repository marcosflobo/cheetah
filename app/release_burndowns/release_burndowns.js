(function () {
    'use strict';

    angular
        .module('cheetahApp')
        .controller('ReleaseBurndownsController', ReleaseBurndownsController);

    ReleaseBurndownsController.$inject = ['$location', '$rootScope', 'FlashService'];
    function ReleaseBurndownsController($location, $rootScope, FlashService) {
        var vm = this;

    }

})();