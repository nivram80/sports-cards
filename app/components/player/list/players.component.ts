import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../../services/player.service';
import { Player } from '../player';

@Component({
    selector: 'players',
    templateUrl: 'app/components/player/list/players.html'
})

export class PlayersComponent implements OnInit {
    errorMessage: string;
    players: Player[];

    constructor(private playerService: PlayerService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.playerService.getPlayers()
            .subscribe(
                players => this.players = players,
                error =>  this.errorMessage = <any>error);
    }
}
