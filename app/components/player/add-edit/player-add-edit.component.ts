import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../../services/player.service";
import { Player } from "../player";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'player-add-edit',
    templateUrl: 'app/components/player/add-edit/player-add-edit.html'
})

export class PlayerAddEditComponent implements OnInit {
    public player = new Player;
    public id: any;
    public errorMessage: string;
    public response: any;

    constructor(
        private playerService: PlayerService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(
                id => this.id = id,
                error => this.errorMessage = <any>error,
                () => this.getPlayer(+this.id));
    }

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

    getPlayer(id) {
        this.playerService.getPlayer(id)
            .subscribe(
                player => this.player = player,
                error =>  this.errorMessage = <any>error);
    }
}
