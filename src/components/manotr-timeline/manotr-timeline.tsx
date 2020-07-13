import "core-js";
import { Component, h, Prop , Element } from '@stencil/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


@Component({
    tag: 'manotr-timeline',
    styleUrl: 'manotr-timeline.css',
    shadow:true
})
export class ManotrTimeline {

    chart: am4charts.XYChart;
    
    @Element() main:HTMLElement;
    div: HTMLElement;

    
    @Prop()artical : string;

    /**
     *
     */
    constructor() {
      console.log("Hello world")
        if(this.artical === undefined || this.artical === "")
            this.artical = window.location.href;
            debugger;
            this.div = document.createElement("div");
            this.main.appendChild(this.div);
            this.div.innerHTML = "loading......";
            // Create chart instance
            this.chart = am4core.create(this.div, am4charts.XYChart);        
    }

    SetChart() {
        /**
         * ---------------------------------------
         * This demo was created using amCharts 4.
         *
         * For more information visit:
         * https://www.amcharts.com/
         *
         * Documentation is available at:
         * https://www.amcharts.com/docs/v4/
         * ---------------------------------------
         */
    
        am4core.useTheme(am4themes_animated);
    
        // Create axes
        var dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 30;
    
        // Create views series and axis
        var viewsAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    
        var viewsSeries = this.chart.series.push(new am4charts.LineSeries());
        viewsSeries.dataFields.valueY = "views";
        viewsSeries.dataFields.dateX = "date";
        viewsSeries.yAxis = viewsAxis;
        viewsSeries.name = "Article views";
        viewsSeries.tooltipText = "{dateX}: [b]{valueY}[/]";
        viewsSeries.strokeWidth = 0;
        viewsSeries.fillOpacity = 1;
        viewsSeries.tensionX = 0.9;
        viewsSeries.stroke = am4core.color("#cbeaef");
        viewsSeries.fill = am4core.color("#cbeaef");
    
        viewsSeries.data = [
          {
            date: new Date(2018, 0, 1),
            views: 450,
          },
          {
            date: new Date(2018, 0, 2),
            views: 269,
          },
          {
            date: new Date(2018, 0, 3),
            views: 700,
          },
          {
            date: new Date(2018, 0, 4),
            views: 490,
          },
          {
            date: new Date(2018, 0, 5),
            views: 500,
          },
          {
            date: new Date(2018, 0, 6),
            views: 550,
          },
          {
            date: new Date(2018, 0, 7),
            views: 420,
          },
        ];
    
        // Create article bullet series and axis
        var articleAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
        //articleAxis.baseUnit = "hour";
        articleAxis.min = 0;
        articleAxis.max = 24;
        //articleAxis.strictMinMax = true;
        articleAxis.renderer.opposite = true;
        articleAxis.renderer.labels.template.disabled = true;
    
        var articleSeries = this.chart.series.push(new am4charts.LineSeries());
        articleSeries.dataFields.valueY = "hour";
        articleSeries.dataFields.dateX = "date";
        articleSeries.yAxis = articleAxis;
        articleSeries.name = "Article";
        articleSeries.tooltipText = "{dateX}: [b]{valueY}[/]";
        articleSeries.strokeWidth = 0;
        articleSeries.strokeOpacity = 0;
        articleSeries.stroke = am4core.color("#e23d31");
        articleSeries.fill = am4core.color("#e23d31");
    
        var bullet = articleSeries.bullets.push(new am4charts.CircleBullet());
        bullet.tooltipText = "{info}";
    
    
    
    
        articleSeries.data = [
          {
            date: new Date(2018, 0, 1),
            hour: 5,
            info: "loumrem ips",
          },
          {
            date: new Date(2018, 0, 1),
            hour: 10,
            info: "This is article info",
          },
          {
            date: new Date(2018, 0, 2),
            hour: 5,
            color: 'red',
            info: "This is article Surrencered",
          },
          {
            date: new Date(2018, 0, 2),
            hour: 6,
            color: 'green',
            info: "This is article Killed",
          },
          {
            date: new Date(2018, 0, 2),
            hour: 7,
            color: 'blue',
            info: "This is article Suiced",
          },
          {
            date: new Date(2018, 0, 2),
            hour: 20,
            info: "This is article info",
          },
          {
            date: new Date(2018, 0, 3),
            hour: 8,
            info: "This is article info",
          },
          {
            date: new Date(2018, 0, 4),
            hour: 20,
            info: "This is article info",
          },
          {
            date: new Date(2018, 0, 5),
            hour: 10,
            info: "This is article info",
          },
          {
            date: new Date(2018, 0, 6),
            hour: 17,
            info: "This is article info",
          },
          {
            date: new Date(2018, 0, 6),
            hour: 22,
            info: "This is article info",
          },
          {
            date: new Date(2018, 0, 6),
            hour: 10,
            info: "This is article info",
          },
        ];
      }

    render() {
        return (
            <div>
                <a href="#">{this.artical}</a>
            </div>
        );
    }
}
