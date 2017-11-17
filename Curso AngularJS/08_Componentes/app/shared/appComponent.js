class RootController{

    constructor(){}
    $onInit () {
        this.titulo = "Soy la cabeza";
     };
    $onChanges (changesObj) { };
    $onDestroy () {         
    };

}

// Un componente será basicamente un nombre, un controlador y un template
angular.module('appModule')
.component('appRoot', {    
    controller: RootController,              
    template:  `<app-cabeza></app-cabeza>
                <app-main></app-main>
                <app-pie></app-pie>`
});
