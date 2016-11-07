(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('OrderMySuffixDetailController', OrderMySuffixDetailController);

    OrderMySuffixDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Order'];

    function OrderMySuffixDetailController($scope, $rootScope, $stateParams, previousState, entity, Order) {
        var vm = this;

        vm.order = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterApp:orderUpdate', function(event, result) {
            vm.order = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
