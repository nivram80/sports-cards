import {Component, OnInit} from '@angular/core';
import { PlayerService } from '../../../services/player.service';
import { Player } from '../player';

@Component({
    selector: 'players',
    template: `
        <h2>Players</h2>
        <div *ngFor="let player of players">
            <div>{{player.fname + ' ' + player.lname}} <span *ngIf="player.hall_of_fame">- HoF</span></div>
        </div>
    `
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