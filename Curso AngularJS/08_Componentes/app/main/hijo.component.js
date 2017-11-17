class HijoController{
    constructor(){}
    $onInit () { 
        this.datosEnPadre = this.parent.datos;
        this.name = nombre;
    };
}

// Un componente será basicamente un nombre, un controlador y un template
angular.module('appMainModule')
.component('appHijo', {    
    controller: HijoController,              
    templateUrl:  './app/main/hijo.component.html',
    // Con la siguiente etiqueta generamos una variable de nombre parent (o la que queramos)
    // que nos permite acceder a las variables del padre
    require: {
        parent: '^appPadre'
    },

    // Otra forma de obtener las propiedades del padre es mediante bindings
    bindings: {
        // Definimos una propiedad two ways con el igual, con el nombre por defecto de forma que 
        // deberá tener el mismo nombre en el padre y en el hijo
        // Si lo definimos one way con <, el hijo se entera de los cambios en el padre, pero no al reves
        nombre: '<',
    }
});
    