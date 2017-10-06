// Controller de AngularJS en formato original anterior a AngularJs 1.2
angular.module('appMain',[])
    .controller('AppController', ['$scope', function($scope){ 
        // Hemos definido el array y puesto el primer valor, indicando que el primer parametro de la funcion
        // que hemos declarado es $scope, pongamos el nombre que pongamos en el parametro de la funcion.
        // Con esto evitamos errores en caso de que mimifiquemos el codigo y el mimificador modifique el nombre de $scope
        $scope.titulo='Curso de AngularJS y Bootstrap'; 
        $scope.autor='José González';        

        console.log($scope);

        $scope.borrar = function(){
            $scope.inputNombre = '';
            console.info("Se ha pulsado el boton");
            console.log($scope);
        }
    }]);


