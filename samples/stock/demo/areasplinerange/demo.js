$(function () {
    // Notice that the dataset has missing data
    $.getJSON('http://data.highcharts.local/jsonp.php?filename=range.json&callback=?', function (data) {

        $('#container').highcharts('StockChart', {

            chart: {
                type: 'areasplinerange'
            },

            rangeSelector: {
                selected: 2
            },

            title: {
                text: 'Temperature variation by day'
            },

            tooltip: {
                valueSuffix: '°C'
            },

            series: [{
                name: 'Temperatures',
                data: data
            }]

        });
    });

});