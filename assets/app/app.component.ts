import { Component } from '@angular/core';
import {AlertsService} from "angular-alert-module";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private alerts:AlertsService){}
    ngOnInit(){
        this.alerts.setDefaults('timeout',0);
    }

}