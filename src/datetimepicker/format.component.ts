import { Component, ViewEncapsulation, Inject , ViewChild} from '@angular/core';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns/src';
import { FloatLabelType } from '@syncfusion/ej2-ng-inputs'; 

@Component({
    selector: 'control-content',
    templateUrl: 'format.html',
    styleUrls: ['format-style.css'],
    encapsulation: ViewEncapsulation.None
})
export class FormatDateTimePickerComponent {
    public date: Object = new Date();
    public format: string = 'dd-MMM-yy hh:mm a';
    @ViewChild('listObj')
    public listObj: DropDownListComponent; 
    public floatLabelType:  FloatLabelType = 'Auto';
    public value: string = 'dd-MMM-yy hh:mm a';
    public formatsData: string[] = ['dd-MMM-yy hh:mm a', 'yyyy-MM-dd HH:mm', 'dd-MMMM HH:mm'];
    changeFormat() {
	/*Apply selected format to the component*/
        let dateFormat: string =  this.listObj.text;
        this.format = dateFormat;
    }
    constructor( @Inject('sourceFiles') private sourceFiles: any) {
        sourceFiles.files = ['format-style.css'];
    }
}