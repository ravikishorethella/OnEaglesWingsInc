import {Router} from "@angular/router";
import {OurStories2Component} from "./our-stories-2/our-stories-2.component";
import {ImageGalleryComponent} from "./image-gallery/image-gallery.component";
import {EventVidoesComponent} from "./event-videos/event-vidoes.component";

export const OUR_STORIES_ROUTES: Router = [
    {path:'', redirectTo: 'our-stories-2', pathMatch: 'full'},
    {path:'our-stories-2', component: OurStories2Component},
    {path:'image-gallery', component: ImageGalleryComponent},
    {path:'event-videos', component: EventVidoesComponent}
];