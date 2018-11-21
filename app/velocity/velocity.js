(function () {
    'use strict';

    angular
        .module('cheetahApp')
        .controller('VelocityController', VelocityController);

    VelocityController.$inject = ['$location', '$rootScope', 'FlashService'];
    function VelocityController($location, $rootScope, FlashService) {
        var vm = this;

    }

})();