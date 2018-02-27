/**
 * ListView Group Temlate Sample
 */

import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'control-content',
    templateUrl: 'group-template.html',
    styleUrls:['group-template.css'],
    encapsulation: ViewEncapsulation.None
})

export class GroupTemplateListViewComponent {

    //Define an array of JSON data
    public dataSource: object = [
        { Name: 'WI-FI', content: 'Disabled', id: '1', class: 'wifi', category: 'Wireless & networks', order: 0 },
        { Name: 'Bluetooth', content: 'Disabled', id: '2', class: 'bluetooth', category: 'Wireless & networks', order: 0 },
        { Name: 'SIM cards', id: '3', class: 'sim', category: 'Wireless & networks', order: 0 },
        { Name: 'Display', content: 'Adaptive brightness is OFF', id: '4', class: 'display', category: 'Device', order: 1 },
        { Name: 'Sound', content: 'Ringer volume at 50%', id: '5', class: 'sound', category: 'Device', order: 1 },
        { Name: 'Battery', content: '85%', id: '5', class: 'battery', category: 'Device', order: 1 },
        { Name: 'Users', content: 'Signed in as Albert', id: '6', class: 'user', category: 'Device', order: 1 },
        { Name: 'Location', content: 'ON / High accuracy', id: '7', class: 'location', category: 'Personal', order: 2 },
        { Name: 'Security', id: '8', class: 'security', category: 'Personal', order: 2 },
        { Name: 'Languages & input', content: 'English (US)', id: '9', class: 'language', category: 'Personal', order: 2 }
    ];


    //Map the appropriate columns to fields property
    public fields: Object = {text: 'Name', groupBy: 'order'};
    public headerTitle: string = 'Settings';

    constructor(@Inject('sourceFiles') private sourceFiles:any) {
         sourceFiles.files = ['group-template.css'];
    }

}