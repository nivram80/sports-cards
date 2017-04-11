import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Player } from '../components/player/player';
import { HttpService } from "./http.service";

@Injectable()
export class PlayerService {

    constructor(private httpService: HttpService) { }

    getPlayers(): Observable<Player[]> {
        return this.httpService.get('/players');
    }

    addPlayer(player): Observable<Player> {
        return this.httpService.post('/players', player);
    }

    getPlayer(id): Observable<Player> {
        return this.httpService.get('/player/' + id);
    }

}
