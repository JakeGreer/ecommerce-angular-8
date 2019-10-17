import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    appTitle: string;
    opened: boolean;

    constructor(private data: DataService) { 
        this.appTitle = this.data.appTitle;
    }

    ngOnInit() {
        this.data.navOpened.subscribe(opened => this.opened = opened);
    }

}
