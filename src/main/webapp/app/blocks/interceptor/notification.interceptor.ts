import * as angular from 'angular';

NotificationInterceptor.$inject = ['$q'];

export function NotificationInterceptor ($q) {
    var service = {
        response: response
    };

    return service;

    function response (response) {
        var alertKey = response.headers('X-jhipsterApp-alert');
        if (angular.isString(alertKey)) {
            //AlertService.success(alertKey, { param : response.headers('X-jhipsterApp-params')});
        }
        return response;
    }
}
