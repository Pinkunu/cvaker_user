App.ng.controller("myform_controller", function ($scope, Avtar) {
    $scope.myAvtar = {};
    
    var myId="585e8df9789b530d6c3c231b";

    Avtar.get({id:myId},function(resu){
        $scope.myAvtar=resu;        
    });

    

    $scope.SaveData = function () {
        $scope.$parent.loading = true;

        Avtar.save({id:myId}, $scope.myAvtar, function (result) {
            $scope.$parent.loading = false;
        });

    };


});