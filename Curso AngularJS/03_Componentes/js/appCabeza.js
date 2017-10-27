class CabezaController{
    constructor(){}
    $onInit(){
        this.titulo = 'Curso de AngularJS y Bootstrap';        
    }
}

angular.module('appMain')
.component('appCabeza', {
    templateUrl: './appCabeza.partial.html',
    controller: CabezaController,
    controllerAs: '$ctrl'
});


