import {AboutUsComponent} from "./about-us/about-us.component";
import {RouterModule, Routes} from "@angular/router";
import {ABOUT_US_ROUTES} from "./about-us/about-us.routing";
import {OurStoriesComponent} from "./our-stories/our-stories.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/about-us/about-us-2', pathMatch: 'full'},
    {path: 'about-us', component: AboutUsComponent, children: ABOUT_US_ROUTES},
    {path: 'our-stories', component: OurStoriesComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);