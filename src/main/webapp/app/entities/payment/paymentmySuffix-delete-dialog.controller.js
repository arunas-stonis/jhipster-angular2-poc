(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('PaymentMySuffixDeleteController',PaymentMySuffixDeleteController);

    PaymentMySuffixDeleteController.$inject = ['$uibModalInstance', 'entity', 'Payment'];

    function PaymentMySuffixDeleteController($uibModalInstance, entity, Payment) {
        var vm = this;

        vm.payment = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Payment.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
