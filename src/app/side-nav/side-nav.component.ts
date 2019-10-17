import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

    events: string[] = [];
    opened: boolean;
    appTitle: string;

    constructor(private data: DataService) { 
        this.appTitle = this.data.appTitle;
    }

    ngOnInit() {
        this.data.navOpened.subscribe(opened => this.opened = opened);
    }

    toggleNav() {
        this.data.toggleNav(!this.opened)
    }

}
