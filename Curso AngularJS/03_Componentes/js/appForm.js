class FormController{
    constructor(){}
    $onInit(){}

    borrar () {
        // Borramos el contenido del campo
        this.inputNombre = '';
        console.info("Se ha pulsado el boton");
        console.log(this);
    }   
}

angular.module('appMain')
.component('appForm', {
    templateUrl: './appForm.partial.html',
    controller: FormController,
    controllerAs: '$ctrl'
});

