import {Router} from "@angular/router";
import {HistoryComponent} from "./history/history.component";
import {BoardOfDirectorsComponent} from "./board-of-directors/board-of-directors.component";

export const ABOUT_US_ROUTES: Router = [
    {path:'', redirectTo: '/about-us', pathMatch: 'full'},
    {path:'history', component: HistoryComponent},
    {path:'board-of-directors', component: BoardOfDirectorsComponent}
];

