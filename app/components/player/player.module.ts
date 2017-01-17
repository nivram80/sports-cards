import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PlayerService } from "../../services/player.service";
import { PlayersComponent } from "./list/players.component";
import { PlayerRoutingModule } from "./player.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PlayerRoutingModule
    ],
    declarations: [
        PlayersComponent
    ],
    providers: [
        PlayerService
    ]
})

export class PlayerModule { }