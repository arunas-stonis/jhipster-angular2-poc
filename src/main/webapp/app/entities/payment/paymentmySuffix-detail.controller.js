(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('PaymentMySuffixDetailController', PaymentMySuffixDetailController);

    PaymentMySuffixDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Payment'];

    function PaymentMySuffixDetailController($scope, $rootScope, $stateParams, previousState, entity, Payment) {
        var vm = this;

        vm.payment = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterApp:paymentUpdate', function(event, result) {
            vm.payment = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
