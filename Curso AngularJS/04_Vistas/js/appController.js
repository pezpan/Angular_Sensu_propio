// Controller de AngularJS en formato de AngularJS 1.5
// aproximadamente segun la guia de estilos de Todd Motto que emplea ES6


class AppController {
    // Normamente se reserva el constructor para la inyeccion de depedencias
    // Inyectamos el scope como parte del objecto controller (i.e. this)
    constructor($scope){
        this.$scope = $scope;
    }

    // Este es como un segundo constructor que utilizamos para definir nuestras variables
    // Es recomendable dejar el constructor para inyectar dependencias, y esta funcion dejarla como
    // segundo constructor (inicializar variables, etc)   
    $onInit(){
        this.titulo = 'Curso de AngularJS y Bootstrap';
        this.autor = 'José González';
        this.sIdea = '';
        this.aIdeas = [];        
    }

    add () {
        // Borramos el contenido del campo
        this.aIdeas.push(this.sIdea);    
        this.sIdea = '';    
    }    
}

// En este caso no hay alzamiento (el orden de las funciones no importa), 
// y como es una clase hay que definir esto al final,
// indicando que la clase que acabamos de definir va en nuestro modulo
angular.module('appMain')
.controller('AppController', AppController);