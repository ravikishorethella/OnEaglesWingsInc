import {AboutUsComponent} from "./about-us/about-us.component";
import {RouterModule, Routes} from "@angular/router";
import {ABOUT_US_ROUTES} from "./about-us/about-us.routing";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/about-us', pathMatch: 'full'},
    {path: 'about-us', component: AboutUsComponent, children: ABOUT_US_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);