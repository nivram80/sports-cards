import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }  from "./app.component";
import { HttpModule, JsonpModule } from "@angular/http";
import { PlayerService } from "./services/player.service";
import "./rxjs-operators";
import { ApiService } from "./services/api.service";
import { HttpService } from "./services/http.service";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routes";
import { PlayerModule } from "./components/player/player.module";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {PageNotFoundRoutingModule} from "./components/page-not-found/page-not-found.routes";

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        AppRoutingModule,
        PlayerModule,
        PageNotFoundRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers:    [
        PlayerService,
        ApiService,
        HttpService
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
