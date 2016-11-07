(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('paymentmySuffix', {
            parent: 'entity',
            url: '/paymentmySuffix',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'jhipsterApp.payment.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/payment/paymentsmySuffix.html',
                    controller: 'PaymentMySuffixController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('payment');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('paymentmySuffix-detail', {
            parent: 'entity',
            url: '/paymentmySuffix/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'jhipsterApp.payment.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/payment/paymentmySuffix-detail.html',
                    controller: 'PaymentMySuffixDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('payment');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Payment', function($stateParams, Payment) {
                    return Payment.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'paymentmySuffix',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('paymentmySuffix-detail.edit', {
            parent: 'paymentmySuffix-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/payment/paymentmySuffix-dialog.html',
                    controller: 'PaymentMySuffixDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Payment', function(Payment) {
                            return Payment.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('paymentmySuffix.new', {
            parent: 'paymentmySuffix',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/payment/paymentmySuffix-dialog.html',
                    controller: 'PaymentMySuffixDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                amount: null,
                                date: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('paymentmySuffix', null, { reload: 'paymentmySuffix' });
                }, function() {
                    $state.go('paymentmySuffix');
                });
            }]
        })
        .state('paymentmySuffix.edit', {
            parent: 'paymentmySuffix',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/payment/paymentmySuffix-dialog.html',
                    controller: 'PaymentMySuffixDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Payment', function(Payment) {
                            return Payment.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('paymentmySuffix', null, { reload: 'paymentmySuffix' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('paymentmySuffix.delete', {
            parent: 'paymentmySuffix',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/payment/paymentmySuffix-delete-dialog.html',
                    controller: 'PaymentMySuffixDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Payment', function(Payment) {
                            return Payment.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('paymentmySuffix', null, { reload: 'paymentmySuffix' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
