angular.module('taskListApp', [])
            .controller('TaskListController', function($scope) {
                $scope.tasks = [];

                $scope.addTask = function() {
                    $scope.tasks.push({name: '', editing: false});
                };

                $scope.editTask = function(index) {
                    if ($scope.tasks[index].editing) {
                        $scope.tasks[index].editing = false;
                    } else {
                        $scope.tasks[index].editing = true;
                    }
                };

                $scope.deleteTask = function(index) {
                    $scope.tasks.splice(index, 1);
                };
            });
