'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
        var myApp = angular.module('IBSS', ['ngRoute','googlechart']);

        myApp.config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.
                        when('/', {
                            templateUrl: "views/Persona.html",
                            // controller: 'homeController'
                        }).
                        when('/Products', {
                            // templateUrl: 'Products.html',
                            // controller: 'ProjectSetupController'
                        }).
                        when('/Services', {
                            templateUrl: 'Services.html',
                            // controller: 'ProjectStatusController'
                        }).
/*                        when('/Storage', {
                            templateUrl: 'Storage.html',
                            // controller: 'SSGQAController'
                        }).*/
                        when('/Contacts', {
                            templateUrl: 'Contacts.html',
                            // controller: 'SSGQAController'
                        }).
                              when('/MetricsPortal', {
                                templateUrl: 'views/Dashboard.html'
                                // controller: MyController
                              }).
                            when('/MetricsDashboard', {
                            templateUrl: 'views/Dashboard.html'
                            // controller: MyController1
                          }).                        
                        otherwise({
                            redirectTo: '/'
                        });
            }]);

myApp.controller('MyController', function ($scope, $http) {
   $http.get('IBSS/mobiles.JSON').success(function(data) {
       $scope.mobiles = data.mobiles;
//get product details
       $scope.getProduct = function (Image) {
        for (var i = 0; i < this.mobiles.length; i++) {
        if (this.mobiles[i].Image == Image)
            return this.mobiles[i];
        }
     return null;
    }

          });
});


/*myApp.controller('MyController1', function ($scope, $routeParams, MyService) {

    // get store and cart from service
    $scope.store = MyService.store;
    $scope.cart = MyService.cart;

    // use routing to pick the selected product
    if ($routeParams.Image != null) {
        $scope.product = $scope.mobiles.getProduct($routeParams.Image);
    }
});
*/




// $http.get("data.txt").success(function (response) { $scope.students= JSON.parse(response); });

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
myApp.factory("MyService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("MyStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the
    // shopping cart with PayPal, you have to create a merchant account with
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "m_thirugnanam@yahoo.com");


    return {
        store: myStore,
        cart: myCart
    };
});