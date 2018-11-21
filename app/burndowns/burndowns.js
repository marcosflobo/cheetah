(function () {
    'use strict';

    angular
        .module('cheetahApp')
        .controller('BurndownsController', BurndownsController);

    BurndownsController.$inject = ['$location', '$rootScope', 'FlashService'];
    function BurndownsController($location, $rootScope, FlashService) {
        var vm = this;

    }

})();