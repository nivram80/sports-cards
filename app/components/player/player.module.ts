import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PlayerService } from "../../services/player.service";
import { PlayersComponent } from "./list/players.component";
import { PlayerRoutingModule } from "./player.routes";
import { PlayerAddEditComponent } from "./add-edit/player-add-edit.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PlayerRoutingModule
    ],
    declarations: [
        PlayersComponent,
        PlayerAddEditComponent
    ],
    providers: [
        PlayerService
    ]
})

export class PlayerModule { }