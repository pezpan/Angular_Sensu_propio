class PieController{
    constructor(){}
    $onInit(){        
        this.autor = 'José González';
    }
}

angular.module('appMain')
.component('appPie', {
    templateUrl: './appPie.partial.html',
    controller: PieController,
    controllerAs: '$ctrl'
});

