import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AccumulationChartComponent, AccumulationChart, IAccLoadedEventArgs, AccumulationTheme } from '@syncfusion/ej2-ng-charts';

/**
 * Sample for doughnut 
 */
@Component({
    selector: 'control-content',
    templateUrl: 'doughnut.html',
    encapsulation: ViewEncapsulation.None
})
export class DoughnutComponent {
    public data: Object[] = [{ x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
    { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
    { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
    { x: 'Insurance', y: 16, text: '16%' }];
    //Initializing Legend
    public legendSettings: Object = {
        visible: false,
    };
    //Initializing DataLabel
    public dataLabel: Object = {
        visible: true,
        name: 'text',
        position: 'Inside',
        font: {
            fontWeight: '600',
            color: '#ffffff'
        }
    };
    public load(args: IAccLoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    public startAngle: number = 0;
    public endAngle: number = 360;
    public tooltip: Object = { enable: true, format: '${point.x} : <b>${point.y}%</b>' };
    public title: string = 'Project Cost Breakdown';
    constructor() {
        //code
    };

}