import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class ListaJugadores {
    readonly ROOT_URL:string;
    constructor(
        private http: HttpClient
    ){
        this.ROOT_URL ='https://mach-eight.uc.r.appspot.com/';
    }

    public async getJugadores(){
        
        return await this.http
            .get(`${this.ROOT_URL}`)
            .toPromise()
            .then((res: any) => {
                return res;
            });
    }
}