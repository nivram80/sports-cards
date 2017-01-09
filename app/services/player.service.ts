import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Player } from '../../app/components/players/player';

@Injectable()
export class PlayerService {
    private playersUrl = 'http://localhost:3000/api/v1/players';

    constructor(private http: Http) { }

    getPlayers(): Observable<Player[]> {
        let headers = new Headers();
        headers.append('Authorization', 'Token fe2ce95a23da19d227b3bd00328516de');
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.playersUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}