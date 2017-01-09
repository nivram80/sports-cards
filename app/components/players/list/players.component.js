"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var player_service_1 = require("../../../services/player.service");
var PlayersComponent = (function () {
    function PlayersComponent(playerService) {
        this.playerService = playerService;
    }
    PlayersComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    PlayersComponent.prototype.getHeroes = function () {
        var _this = this;
        this.playerService.getPlayers()
            .subscribe(function (players) { return _this.players = players; }, function (error) { return _this.errorMessage = error; });
    };
    return PlayersComponent;
}());
PlayersComponent = __decorate([
    core_1.Component({
        selector: 'players',
        template: "\n        <h2>Players</h2>\n        <div *ngFor=\"let player of players\">\n            <div>{{player.fname + ' ' + player.lname}} <span *ngIf=\"player.hall_of_fame\">- HoF</span></div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [player_service_1.PlayerService])
], PlayersComponent);
exports.PlayersComponent = PlayersComponent;
//# sourceMappingURL=players.component.js.map