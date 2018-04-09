function points() {
    return function (value) {
        switch (value) {
            case 0:
                return "love";
            case 1:
                return "15";
            case 2:
                return "30";
            case 3:
                return "40";
            case 4:
                return "Advantage";
        }
    };
}

angular
    .module('scoreApp')
    .filter('points', points);
