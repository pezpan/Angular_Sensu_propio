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
        /*this.nombre;        
        this.email;        
        this.info;        
        this.condiciones;      
        this.turno;        
        this.curso;    
        */
        this.form = {
            nombre : "",
            email : "",        
            info : false,        
            condiciones : false,      
            turno : "" ,
            curso : ""
        }

        this.turnos = [
            { "id" : 'mañana', "name" : 'Mañana'},
            { "id" : 'tarde', "name" : 'Tarde'}          
        ];



        this.cursos = [];

        this.cursosMañana = [
            { "id" : 'CA23', "titulo" : 'AngularJS'},
            { "id" : 'CV25', "titulo" : 'Vue'},
            { "id" : 'CR45', "titulo" : 'React'}           
        ];

        this.cursosTarde = [
            { "id" : 'CJ20', "titulo" : 'Java'},
            { "id" : 'CV29', "titulo" : 'Python'},
            { "id" : 'CR47', "titulo" : 'Spring'}           
        ];

        this.enviado = false;

    } // Fin onInit

    selectCursos () {
        if(this.form.turno  == 'mañana'){
            this.cursos = this.cursosMañana;    
        }else{
            this.cursos = this.cursosTarde;
        }
        
    }    

    enviar (){
        
        this.enviado = true;
    }

    confirmar(){
        console.log("Formulario enviado");
        
    }
}

// En este caso no hay alzamiento (el orden de las funciones no importa), 
// y como es una clase hay que definir esto al final,
// indicando que la clase que acabamos de definir va en nuestro modulo
angular.module('appMain')
.controller('AppController', AppController);