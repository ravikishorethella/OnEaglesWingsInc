import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HeaderComponent} from "./header/header-component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {routing} from "./app.routing";
import {FooterComponent} from "./footer/footer.component";
import {HistoryComponent} from "./about-us/history/history.component";
import {BoardOfDirectorsComponent} from "./about-us/board-of-directors/board-of-directors.component";
import {FormsModule} from "@angular/forms";
import {AboutUs2Component} from "./about-us/about-us-2/about-us-2.component";
import {OurStoriesComponent} from "./our-stories/our-stories.component";
import {AboutUsSidebarComponent} from "./about-us/about-us-sidebar/about-us-sidebar.component";
import {EventVidoesComponent} from "./our-stories/event-videos/event-vidoes.component";
import {ImageGalleryComponent} from "./our-stories/image-gallery/image-gallery.component";
import {OurStories2Component} from "./our-stories/our-stories-2/our-stories-2.component";
import {OurStoriesSidebarComponent} from "./our-stories/our-stories-sidebar/our-stories-sidebar.component";
import {SpecialEventsAndNewsComponent} from "./special-events-and-news/special-events-and-news.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {DonateComponent} from "./donate/donate.component";

@NgModule({
    declarations: [ AppComponent,
                    HeaderComponent,
                    AboutUsComponent,
                    FooterComponent,
                    HistoryComponent,
                    BoardOfDirectorsComponent,
                    AboutUs2Component,
                    OurStoriesComponent,
                    AboutUsSidebarComponent,
                    EventVidoesComponent,
                    ImageGalleryComponent,
                    OurStories2Component,
                    OurStoriesSidebarComponent,
                    SpecialEventsAndNewsComponent,
                    ContactUsComponent,
                    DonateComponent
    ],
    imports: [BrowserModule, FormsModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}