myApp.controller('editColumnsCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'flash',
    function ($scope, $rootScope, $state, $stateParams, flash) {

        var moduleKey = $stateParams.moduleKey;

        console.log(moduleKey);
        $scope.moduleKey = moduleKey;

        // Determine the initial set of selected columns from the stored module configs

        if ($rootScope.moduleConfigs[moduleKey] != null) {
            $scope.selectedColumns = $rootScope.moduleConfigs[moduleKey];
        }
        else {
            $scope.selectedColumns = [];
            $rootScope.dimensions.forEach(function (column) {
                $scope.selectedColumns.push(column);
            });
            $rootScope.metrics.forEach(function (column) {
                $scope.selectedColumns.push(column);
            });
        }

        $scope.selectColumn = function (item) {
            var index = $scope.selectedColumns.indexOf(item);
            if (index == -1) {
                $scope.selectedColumns.push(item);
            }
        };

        $scope.removeColumn = function (item) {
            var index = $scope.selectedColumns.indexOf(item);
            if (index >= 0) {
                $scope.selectedColumns.splice(index, 1);
            }
        };

        $scope.columnEditDone = function () {
            $scope.selectedColumns.forEach(function (column) {
                delete column['$$hashKey'];
            });
            $rootScope.moduleConfigs[$scope.moduleKey] = $scope.selectedColumns;
            $state.go($scope.moduleKey + ".list", {moduleKey: $scope.moduleKey});
        }
    }]);
