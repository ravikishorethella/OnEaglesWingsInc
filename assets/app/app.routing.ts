import {AboutUsComponent} from "./about-us/about-us.component";
import {RouterModule, Routes} from "@angular/router";
import {ABOUT_US_ROUTES} from "./about-us/about-us.routing";
import {OurStoriesComponent} from "./our-stories/our-stories.component";
import {OUR_STORIES_ROUTES} from "./our-stories/our-stories.routing";
import {SpecialEventsAndNewsComponent} from "./special-events-and-news/special-events-&-news.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {DonateComponent} from "./donate/donate.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/about-us/about-us-2', pathMatch: 'full'},
    {path: 'about-us', component: AboutUsComponent, children: ABOUT_US_ROUTES},
    {path: 'our-stories', component: OurStoriesComponent, children: OUR_STORIES_ROUTES},
    {path: 'special-events-and-news', component: SpecialEventsAndNewsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'donate', component: DonateComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);