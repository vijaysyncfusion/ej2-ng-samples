import { Component, ViewEncapsulation } from '@angular/core';
import { MapsTheme, Maps, ISelectionEventArgs, Selection, ILoadEventArgs } from '@syncfusion/ej2-ng-maps';
import { seatData } from './MapData/seatSelection-data/seatSelection';

Maps.Inject(Selection);
interface SeatInfo {
    seatno?: number;
    fill?: string;
}

/**
 * Seat Selection sample
 */
@Component({
    selector: 'control-content',
    templateUrl: 'seatselection.html',
    styleUrls: ['maps.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class MapsSeatSelectionComponent {
    public zoomSettings: object = {
        enable: false
    };
    public seatInfo: HTMLDivElement;
    public load = (args: ILoadEventArgs) => {
        let theme: string = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.maps.theme = <MapsTheme>(theme.charAt(0).toUpperCase() + theme.slice(1));
    }
    public itemSelection = (args: ISelectionEventArgs) => {
        if ((args.shapeData as SeatInfo).fill === 'Orange') {
            args.fill = 'Orange';
            document.getElementById(args.target).setAttribute('class', 'ShapeselectionMapStyle');
            return;
        }
        args.fill = 'green';
        let seat: number = (args.shapeData as SeatInfo).seatno;
        let connector: string = ' ';
        if (this.seatInfo.innerHTML === '') {
            this.seatInfo.innerHTML = '<span id="seat-info">Seats Selected -</span>';
        } else {
            connector = ', ';
        }
        let seatString: string = '<span class="seats">' + connector + seat + '</span>';
        let seatString1: string = ' ' + seat + '</span><span class="seats">,'; // 15</span><span class="seats">,
        let lastString: string = '<span id="seat-info">Seats Selected -</span><span class="seats"> ' + seat + '</span>';
        if (this.seatInfo.innerHTML.indexOf(seatString) === -1 && this.seatInfo.innerHTML.indexOf(seatString1) === -1 &&
            this.seatInfo.innerHTML.indexOf(lastString) === -1) {
            this.seatInfo.innerHTML += '<span class="seats">' + connector + seat + '</span>';
        } else {
            this.seatInfo.innerHTML = this.seatInfo.innerHTML.replace(seatString, '');
            this.seatInfo.innerHTML = this.seatInfo.innerHTML.replace(seatString1, '');
            if (this.seatInfo.innerHTML === lastString) {
                this.seatInfo.innerHTML = '';
            }
        }
    };

    public layers: object[] = [
        {
            geometryType: 'Normal',
            shapeData: seatData,
            shapeSettings: {
                colorValuePath: 'fill'
            },
            selectionSettings: {
                enable: true,
                opacity: 1,
                enableMultiSelect: true
            }
        }
    ];
    ngAfterViewInit() {
        this.seatInfo = <HTMLDivElement>document.getElementById('selectedseats');
        document.getElementById('clear-btn').onclick = () => {
            this.seatInfo.innerHTML = '';
            let selected: HTMLCollection = document.getElementsByClassName('ShapeselectionMapStyle');
            for (let i: number = 0, length: number = selected.length; i < length; i++) {
                selected[0].setAttribute('class', '');
            }
        };
    }
    constructor() {
        //code
    };

}