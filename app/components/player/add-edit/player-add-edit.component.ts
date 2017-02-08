import { Component } from "@angular/core";
import { PlayerService } from "../../../services/player.service";
import { Player } from "../player";
import { Router } from "@angular/router";

@Component({
    selector: 'player-add-edit',
    templateUrl: 'app/components/player/add-edit/player-add-edit.html'
})

export class PlayerAddEditComponent {
    player = new Player;
    errorMessage: string;
    response;

    constructor(
        private playerService: PlayerService,
        private router: Router
    ) { }

    onSubmit() {
        this.playerService.addPlayer(this.player)
        .subscribe(
            response => this.response = response,
            error =>  this.errorMessage = <any>error,
            () => this.goToPlayers());
    };

    goToPlayers() {
        this.router.navigate(['/players']);
    }
}
