class PieController{
    
        constructor(){}
        $onInit () { 
            this.empresa = 'CAS TRAINING';
            this.autor = 'Jose Gonzalez';
            this.date = new Date();
        };

    }
    
    // Un componente será basicamente un nombre, un controlador y un template
    angular.module('appSharedModule')
    .component('appPie', {    
        controller: PieController,              
        templateUrl:  './app/shared/pie.component.html'
    });
    