// Como no estamos poniendo los corchetes, lo que le estamos diciendo es que coja
// un modulo que ya se encuentra definido con el nombre que le pasamos
// No estamos instanciando nada
angular.module('appMain')
    .controller('AppController', AppController);

// Inyectamos asi las dependencias para evitar problemas durante la mimificacion
// Le estamos diciendo que lo que le inyectamos no le cambie el nombre para evitar problemas
// Pero no es necesario inyectar el scope si no lo vamos a usar para otra cosa
AppController.$inject = ['$scope'];
function AppController($scope) {
    // Si definimos this con el mismo nombre de variable que usamos en la vista, es una forma de hacer ver que se
    // que se trata del mismo objeto, pero es solo con caracter visual.
    // var vm = this;
    this.titulo = 'Curso de AngularJS y Bootstrap';
    this.autor = 'José González';

    console.log(this);
    // Si quisieramos mostrar asi el scope, tendriamos que inyectarlo, pasarlo como parámetro, como estamos haciendo
    console.log($scope);

    this.borrar = function () {
        // Borramos el contenido del campo
        this.inputNombre = '';
        console.info("Se ha pulsado el boton");
        console.log(this);
    }    
}