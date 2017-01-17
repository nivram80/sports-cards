import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlayersComponent } from "./list/players.component";
import { PlayerAddEditComponent } from "./add-edit/player-add-edit.component";

const playersRoutes: Routes = [
    { path: 'players',  component: PlayersComponent },
    { path: 'players/add',  component: PlayerAddEditComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(playersRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PlayerRoutingModule { }