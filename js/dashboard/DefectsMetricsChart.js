myApp.controller("DefectsMetricsChart", function ($scope) {

    var chart1 = {};
    chart1.type = "PieChart";
    chart1.cssStyle = "height:200px; width:300px;";
    chart1.data =[
          ['Defects', 'Count'],
          ['Opened Defects',     11],
          ['Closed Defects',      2],
          ['Rejected Defects',  2],
          ['Resolved Defects', 2],
          ['Retest Failed',    7]
        ];

    chart1.options = {
         // title: 'Defects Metrics'   
         width:450,
         height:250,
         legend: {position: 'right', textStyle: {fontSize: 10}},         
         chartArea: { left:0,width:'100%'},
         pieSliceTextStyle:{fontSize:9.5},
          // pieSliceText: 'value',
         slices: {0: {offset: 0.1}}
        
    };

    chart1.formatters = {};

    $scope.pieChart = chart1;

});

