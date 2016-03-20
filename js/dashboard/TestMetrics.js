/*  // google.charts.load("current1", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Test Metrics', 'Count'],
          ['Passed',     11],
          ['Failed',      2],
          ['Pending',  2],
          ['Blocked', 2]
      
        ]);

        var options = {
          // title: 'Test Metrics',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }*/

      myApp.controller('TestMetrics',function($scope) {
        var chart3={};
        chart3.type="PieChart";
        chart3.data=[
          ['Test Metrics', 'Count'],
          ['Passed',     11],
          ['Failed',      2],
          ['Pending',  2],
          ['Blocked', 2]
      
        ];
        chart3.options={
          // title: 'Test Metrics',
          pieHole: 0.4,
          width:450,
         height:250,
          pieSliceTextStyle:{fontSize:9.5}
        };
        chart3.formatter={};
        $scope.donutchart=chart3;
      });