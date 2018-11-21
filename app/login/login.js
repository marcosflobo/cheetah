(function () {
    'use strict';

    angular
        .module('cheetahApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
            $("#div_menu").hide();
            $("#menu_config_user").hide();
            $("#div_ng_view").parent().removeClass("col-10");
            $("#div_ng_view").parent().addClass("col");
            $("#div_login").removeClass("col-md-6 col-md-offset-3");
            $("#div_login").removeClass("col-md-offset-3");
            $("#div_login").addClass("container");
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $("#div_menu").show();
                    $("#menu_config_user").show();
                    $("#div_ng_view").parent().addClass("col-10");
                    $("#div_ng_view").parent().removeClass("col");
                    $("#div_login").addClass("col-md-6 col-md-offset-3");
                    $("#div_login").addClass("col-md-offset-3");
                    $("#div_login").removeClass("container");
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        }
    }

})();
