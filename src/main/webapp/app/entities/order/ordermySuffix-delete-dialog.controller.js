(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('OrderMySuffixDeleteController',OrderMySuffixDeleteController);

    OrderMySuffixDeleteController.$inject = ['$uibModalInstance', 'entity', 'Order'];

    function OrderMySuffixDeleteController($uibModalInstance, entity, Order) {
        var vm = this;

        vm.order = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Order.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
