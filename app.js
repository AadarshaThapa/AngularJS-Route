var app = angular.module('myApp',['ngRoute','ngAnimate']);
// var http = require('http')

app.config(['$routeProvider' ,function($routeProvider){
        $routeProvider
        .when('/home',{
            templateUrl: 'views/home.html',
            controller:'HomeController'
        })
        .when('/directory',{
            templateUrl: 'views/directory.html',
            // controller: 'myController'
        })
        .otherwise({
            redirectTo:'/home'
        })
    }]

)

app.directive('randomData', [function(){
    return {
        restrict: 'E',
        scope:{

        }
    };
}])

app.controller( 'MyController', ['$scope','$http',function($scope,$http){

    $scope.deleteData = function(data) {
        var confirmDelete = window.confirm("Are you sure you want to delete " + data.name + "?");
        if (confirmDelete) {
            var deletedDataIndex = $scope.datas.indexOf(data);
            $scope.datas.splice(deletedDataIndex, 1);
        }
    };
    


    $scope.addData = function(){
        $scope.datas.push({
            name: $scope.newdata.name,
            belt: $scope.newdata.belt,
            rate: parseInt($scope.newdata.rate),
            available:true,

        });
      
        $scope.newdata.name="";
        $scope.newdata.belt="";
        scope.newdata.rate="";

    }
    $scope.removeAllData= function(){
        $scope.datas=[];
    }
$scope.datas = [
    {
        name:"Ryan",
        belt:"green",
        rate:50,
        available:true
    },
    {
        name:"kris",
        belt:"blue",
        rate:500,
        available:true
    },
    {
        name:"hari",
        belt:"red",
        rate:10,
        available:true
    },
    {
        name:"L",
        belt:"grey",
        rate:1000,
        available:false
    },
    {
        name: "Ryan",
        belt: "green",
        rate: 50,
        available: true
    },
    {
        name: "Kris",
        belt: "blue",
        rate: 500,
        available: true
    },
    {
        name: "Hari",
        belt: "red",
        rate: 10,
        available: true
    },
    {
        name: "L",
        belt: "grey",
        rate: 1000,
        available: false
    },
    {
        name: "John",
        belt: "black",
        rate: 200,
        available: true
    },
    {
        name: "Sarah",
        belt: "purple",
        rate: 300,
        available: false
    },
    {
        name: "Alex",
        belt: "brown",
        rate: 150,
        available: true
    },
    {
        name: "Emma",
        belt: "orange",
        rate: 800,
        available: true
    },
    {
        name: "Mike",
        belt: "yellow",
        rate: 120,
        available: false
    },
    {
        name: "Sophie",
        belt: "white",
        rate: 250,
        available: true
    },
];

$http.get ('data/datas.json').success(function(data){
    $scope.datas = data;
    console.log(data)
})
// console.log(angular.toJson($scope.datas))

}])