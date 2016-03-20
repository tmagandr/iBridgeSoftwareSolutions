myApp.controller('ProjectPhases',function($scope) {
var chart4 = {};
chart4.type ="LineChart";
chart4.data = [
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ];


chart4.options = {
          // title: 'Project Performance',
          curveType: 'function',
          width:450,
         height:250,
          legend: { position: 'bottom' }
        };

    chart4.formatters = {};

    $scope.phaseCharts = chart4;

});


