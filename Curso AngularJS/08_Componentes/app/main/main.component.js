class MainController{
    constructor(){}
    $onInit () { 
        
    };
}

// Un componente será basicamente un nombre, un controlador y un template
angular.module('appMainModule')
.component('appMain', {    
    controller: MainController,              
    templateUrl:  './app/main/main.component.html'
});
    