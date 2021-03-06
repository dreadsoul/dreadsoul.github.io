// jQuery tooltip form
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// temperature chart
$(function(){
$.getJSON('data/temperature.json', function(data) {

  // Create a timer
  var start = +new Date();

  // Create the chart
  Highcharts.stockChart('container_temerature', {
    credits: {
      enabled: false,
    },
    chart: {
      events: {
        load: function() {
          this.setTitle(null, {
            //text: 'Built chart in ' + (new Date() - start) + 'ms'
          });
        }
      },
      zoomType: 'x'
    },

    rangeSelector: {

      buttons: [{
        type: 'day',
        count: 3,
        text: '3d'
      }, {
        type: 'week',
        count: 1,
        text: '1w'
      }, {
        type: 'month',
        count: 1,
        text: '1m'
      }, {
        type: 'month',
        count: 6,
        text: '6m'
      }, {
        type: 'year',
        count: 1,
        text: '1y'
      }, {
        type: 'all',
        text: 'All'
      }],
      selected: 3
    },

    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },

    title: {
      text: 'Hourly temperatures in Region, city, 2009-2015'
    },

    subtitle: {
      text: 'Built chart in ... by ...' // dummy text to reserve space for dynamic subtitle
    },

    series: [{
      name: 'Temperature',
      data: data.data,
      pointStart: data.pointStart,
      pointInterval: data.pointInterval,
      tooltip: {
        valueDecimals: 1,
        valueSuffix: '°C'
      }
    }]

  });
});
});


// Piechart
$(function () {
Highcharts.chart('container_1', {
  credits: {
    enabled: false
  },
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
  title: {
    text: 'Decision Support Parameter Ratio, 2014'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Parameter ratio',
    data: [
      ['Forecast', 45.0],
      ['ML Algorithm', 26.8],
      {
        name: 'Temperature',
        y: 12.8,
        sliced: true,
        selected: true
      },
      ['Process States', 8.5],
      ['Gas Demand', 6.2],
      ['Others', 0.7]
    ]
  }]
});
});
