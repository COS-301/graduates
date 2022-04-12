import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'graduates-story-explore',
  templateUrl: './story-explore.component.html',
  styleUrls: ['./story-explore.component.scss'],
  providers: [MatCardModule, MatButtonModule],
})
export class StoryExploreComponent implements OnInit {

  @Input() upload : boolean;
  uploadfrm! : FormGroup;
  builder! : FormBuilder; 
  submit = false;
  return : boolean;

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

  constructor(private breakpointObserver: BreakpointObserver, f: FormBuilder, private router : Router) {
    this.upload = false;
    this.builder = f;
    this.return = false;
  }

  ngOnInit(): void {
    this.uploadfrm = this.builder.group({
      file: ['', Validators.required],
      tags: ['', Validators.required]
    })
  }

  uploadStory() {
    if (this.return) 
      return;
    
    this.submit = true;
      //validate form here:
      //upload form here:
  }

  cancel() {
    this.return = true;
    this.router.navigate(['/shorts']); //must direct to the user-profile
  }

}
