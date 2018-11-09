(function () {
    'use strict';

    angular
        .module('cheetahApp')
        .controller('View1Ctrl', View1Ctrl);

    View1Ctrl.$inject = ['$location', '$rootScope', 'FlashService'];
    function View1Ctrl($location, $rootScope, FlashService) {
        var vm = this;

    }

})();