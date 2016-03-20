/*google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Diameter', 'Age'],
    [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]]);

  var options = {
    // title: 'Age of sugar maples vs. trunk diameter, in inches',
    hAxis: {title: 'Planned'},
    vAxis: {title: 'Actual'},
    legend: 'none',
    trendlines: { 0: {} }    // Draw a trendline for data series 0.
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}*/

myApp.controller('PlannedvsActual',function($scope) {

    var chart2 = {};
    chart2.type = "ScatterChart";
    chart2.cssStyle = "height:200px; width:300px;";
    chart2.data = [
    ['Diameter', 'Age'],
    [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]];

    chart2.options = {
    // title: 'Age of sugar maples vs. trunk diameter, in inches',
    hAxis: {title: 'Planned'},
    vAxis: {title: 'Actual'},
    legend: 'none',
    width:450,
    height:250,
    trendlines: { 0: {} }    // Draw a trendline for data series 0.
  };

    chart2.formatters = {};

    $scope.chart_div = chart2;

});