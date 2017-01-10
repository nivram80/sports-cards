import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PlayersComponent } from './components/player/list/players.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { PlayerService } from './services/player.service';
import './rxjs-operators';
import { ApiService } from './services/api.service';
import {HttpService} from "./services/http.service";

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [ AppComponent, PlayersComponent ],
    providers:    [
        PlayerService,
        ApiService,
        HttpService
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
