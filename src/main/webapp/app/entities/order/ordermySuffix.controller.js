(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('OrderMySuffixController', OrderMySuffixController);

    OrderMySuffixController.$inject = ['$scope', '$state', 'Order'];

    function OrderMySuffixController ($scope, $state, Order) {
        var vm = this;
        
        vm.orders = [];

        loadAll();

        function loadAll() {
            Order.query(function(result) {
                vm.orders = result;
            });
        }
    }
})();
