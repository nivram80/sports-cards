import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PlayersComponent } from './components/players/list/players.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { PlayerService } from './services/player.service';
import './rxjs-operators';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [ AppComponent, PlayersComponent ],
    providers:    [ PlayerService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {

}
