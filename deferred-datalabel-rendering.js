
/**
 * Highcharts plugin for showing the dataLabels after the chart has been drawn
 *
 * @Date: 2014-04-01
 * @Author: Pavlos Polianidis
 */


(function (H) {
    H.wrap(H.seriesTypes.column.prototype, 'drawDataLabels', function (proceed) {
        var _self_ = this,
            points = this.points;

        this.options.animation.complete = function () {
            // draw the datalabels
            proceed.call(_self_);
        };
    });

    H.wrap(H.seriesTypes.pie.prototype, 'drawDataLabels', function (proceed) {
        var _self_ = this,
            points = this.points;

        this.options.animation.complete = function () {
            // draw the datalabels
            proceed.call(_self_);
        };
    });
}(Highcharts))