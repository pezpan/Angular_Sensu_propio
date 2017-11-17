class PadreController{
    constructor(){}
    $onInit () { 
        // Necesitamos declarar el objeto
        // Debemos definir la propiedad a heredar dentro de un objeto, no como un dato primitivo
        this.datos = {};
        this.cadenas = {};
    };
}

// Un componente será basicamente un nombre, un controlador y un template
angular.module('appMainModule')
.component('appPadre', {    
    controller: PadreController,              
    templateUrl:  './app/main/padre.component.html'
});
    