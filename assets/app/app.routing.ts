import {AboutUsComponent} from "./about-us/about-us.component";
import {RouterModule, Routes} from "@angular/router";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/about-us', pathMatch: 'full'},
    {path: 'about-us', component: AboutUsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);