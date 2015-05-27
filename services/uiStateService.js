myApp.factory("uiStateService", ['$rootScope', function ($rootScope) {

    return {
        getColumns: function (moduleKey) {
            if ($rootScope.moduleConfigs[moduleKey] != null) {
                return $rootScope.moduleConfigs[moduleKey];
            }
            else {
                var columnLayout = [];
                $rootScope.dimensions.forEach(function (column) {
                    delete column['$$hashKey'];
                    columnLayout.push(column);
                });
                $rootScope.metrics.forEach(function (column) {
                    delete column['$$hashKey'];
                    columnLayout.push(column);
                });
                return columnLayout;
            }
        },

        saveColumns: function (moduleKey, columns) {
            // to be written
        }
    };
}]);
