import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'graduates-story-explore',
  templateUrl: './story-explore.component.html',
  styleUrls: ['./story-explore.component.scss'],
  
  providers: [MatCardModule, MatButtonModule],
})
export class StoryExploreComponent {

  @Input() upload : boolean;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 3, rows: 1 , pic: '', tags: []},
          { title: 'Card 2', cols: 3, rows: 1 , pic: '', tags: []},
          { title: 'Card 3', cols: 3, rows: 1 , pic: '', tags: []},
          { title: 'Card 4', cols: 3, rows: 1 , pic: '', tags: []},
          { title: 'Card 5', cols: 3, rows: 1 , pic: '', tags: []},
          { title: 'Card 6', cols: 3, rows: 1 , pic: '', tags: []},
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 , pic: '', tags: ["#COS301", "#TestLife", "UI"]},
        { title: 'Card 2', cols: 1, rows: 1 , pic: '', tags: []},
        { title: 'Card 3', cols: 1, rows: 1 , pic: '', tags: []},
        { title: 'Card 4', cols: 1, rows: 1 , pic: '', tags: []},
        { title: 'Card 5', cols: 1, rows: 1 , pic: '', tags: []},
        { title: 'Card 6', cols: 1, rows: 1 , pic: '', tags: []},
      ];
    })
  );

  searchText: string = "";
  search(){
    this.searchText = (<HTMLInputElement>document.getElementById("search")).value;
     alert('searching for ' + this.searchText);

  }
  constructor(private breakpointObserver: BreakpointObserver) {
    this.upload = false;
  }
}
