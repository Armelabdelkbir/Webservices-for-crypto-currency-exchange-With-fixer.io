var app = angular.module("app", []);
app.controller("conversionController", function($scope, $http) {
  $scope.price = 22 ;
  $scope.choosedCryptoCurrency = "0";
  $scope.convertedPrice = '';
  $scope.cryptoCurrency = function(){

    if($scope.choosedCryptoCurrency != "0") {
      var url = "http://coincap.io/page/" + $scope.choosedCryptoCurrency;

      $http({
      method: 'GET',
      url: url
      }).then(function successCallback(response) {
        var resultPrice = $scope.price / response.data.price_usd ;
        $scope.convertedPrice = " <=> "  + resultPrice +' '+ response.data.display_name;

      }, function errorCallback(response) {
        console.log("error")

      });

    }
  }
});
