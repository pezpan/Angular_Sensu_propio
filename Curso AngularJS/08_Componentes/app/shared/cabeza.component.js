class CabezaController{
    
        constructor(){}
        $onInit () { 
            this.titulo = 'Cabecera Componentes';
        };

    }
    
    // Un componente será basicamente un nombre, un controlador y un template
    angular.module('appSharedModule')
    .component('appCabeza', {    
        controller: CabezaController,              
        templateUrl:  './app/shared/cabeza.component.html'
    });
    