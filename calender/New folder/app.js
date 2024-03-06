angular.module('eventApp', [])
    .controller('CalendarController', function() {
        var vm = this;
        vm.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        vm.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        var currentDate = new Date();
        vm.currentMonth = vm.months[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
        
        function getDaysInMonth(month, year) {
            var date = new Date(year, month, 1);
            var days = [];
            while (date.getMonth() === month) {
                days.push(date.getDate());
                date.setDate(date.getDate() + 1);
            }
            return days;
        }
        
        vm.days = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
        
        vm.previousMonth = function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            vm.currentMonth = vm.months[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
            vm.days = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
        };
        
        vm.nextMonth = function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            vm.currentMonth = vm.months[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
            vm.days = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
        };
    });
