app.controller('dogController', function($scope) {
 
    // $scope.init = function (){
    //     console.log('in init');
    // }

    $scope.data = database.ref('/dogs/').once('value').then(function(snapshot) {
        console.log(snapshot.val());
        var name = snapshot.val().name;
        var description = snapshot.val().description;
        var imageUrl = snapshot.val().image;
    });

});