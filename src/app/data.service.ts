import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    h1Style: boolean = false;
    appTitle: string = 'elevenroots';
    private navStatusSource = new BehaviorSubject(true);
    navOpened = this.navStatusSource.asObservable();

    constructor(private http: HttpClient) { }

    // getUsers() {
    //     return this.http.get('https://reqres.in/api/users')
    // }

    toggleNav(opened: boolean) {
        this.navStatusSource.next(opened);
    }
}
