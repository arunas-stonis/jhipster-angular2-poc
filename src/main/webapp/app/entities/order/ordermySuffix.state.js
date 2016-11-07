(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('ordermySuffix', {
            parent: 'entity',
            url: '/ordermySuffix',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'jhipsterApp.order.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/order/ordersmySuffix.html',
                    controller: 'OrderMySuffixController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('order');
                    $translatePartialLoader.addPart('product');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('ordermySuffix-detail', {
            parent: 'entity',
            url: '/ordermySuffix/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'jhipsterApp.order.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/order/ordermySuffix-detail.html',
                    controller: 'OrderMySuffixDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('order');
                    $translatePartialLoader.addPart('product');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Order', function($stateParams, Order) {
                    return Order.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'ordermySuffix',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('ordermySuffix-detail.edit', {
            parent: 'ordermySuffix-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/order/ordermySuffix-dialog.html',
                    controller: 'OrderMySuffixDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Order', function(Order) {
                            return Order.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('ordermySuffix.new', {
            parent: 'ordermySuffix',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/order/ordermySuffix-dialog.html',
                    controller: 'OrderMySuffixDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                code: null,
                                quantity: null,
                                productName: null,
                                amount: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('ordermySuffix', null, { reload: 'ordermySuffix' });
                }, function() {
                    $state.go('ordermySuffix');
                });
            }]
        })
        .state('ordermySuffix.edit', {
            parent: 'ordermySuffix',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/order/ordermySuffix-dialog.html',
                    controller: 'OrderMySuffixDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Order', function(Order) {
                            return Order.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('ordermySuffix', null, { reload: 'ordermySuffix' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('ordermySuffix.delete', {
            parent: 'ordermySuffix',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/order/ordermySuffix-delete-dialog.html',
                    controller: 'OrderMySuffixDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Order', function(Order) {
                            return Order.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('ordermySuffix', null, { reload: 'ordermySuffix' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
