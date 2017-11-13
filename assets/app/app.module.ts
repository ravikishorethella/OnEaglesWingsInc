import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HeaderComponent} from "./header/header-component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {routing} from "./app.routing";

@NgModule({
    declarations: [ AppComponent,
                    HeaderComponent,
                    AboutUsComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}