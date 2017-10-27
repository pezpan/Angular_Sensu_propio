class RootController{
    constructor(){}
    $onInit(){}
}

angular.module('appMain')
.component('appRoot', {    
    controller: RootController,
    controllerAs: '$ctrl',
    // Podemos poner directamente el codigo html entre comillas francesas y cambiando templateUrl por template
    template:`<div class="container">
    
                <!-- Genera automaticamente una etiqueta con el nombre del componente, 
                    poniendo un guion donde esta la mayuscula, convierte camelCase en Kebab case -->
                <app-cabeza></app-cabeza>
                
                <!-- Componente form-->        
                <app-form></app-form>
                        
                <!-- Componente pie-->            
                <app-pie></app-pie>
                    
            </div>`
});