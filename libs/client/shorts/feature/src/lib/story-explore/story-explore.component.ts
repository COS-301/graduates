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

  cardlist = [
    { title: 'Card 1', cols: 3, rows: 1 , pic: '', tags: []}
  ];
  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 3, rows: 1 , pic: '', tags: []},
        ];
      }

      return this.cardlist;
    })
  );


  constructor(private breakpointObserver: BreakpointObserver) {
    this.upload = false;
  }



  searchText: string = "";
  search(){
    this.searchText = (<HTMLInputElement>document.getElementById("search")).value;
     alert('searching for ' + this.searchText);
     this.loadCards();

  }




  loadCards(){

    this.cardlist = [
      { title: 'Card 1', cols: 1, rows: 1 , pic: '', tags: []}
    ];


    for (let index = 0; index < 100; index++) {
      this.cardlist.push({ title: 'Card 1', cols: 1, rows: 1 , pic: '', tags: []});
      
    }
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
      if (matches) {
        this.cardlist.forEach(element => {      // Set to one card per row
          element.cols = 3;
        });
      }
      else {        
        this.cardlist.forEach(element => {      // Set to three cards per row
          element.cols = 1;
        });
      }
      return this.cardlist;
      })
    );
  }
}
