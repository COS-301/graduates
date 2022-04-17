import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-expansion-notif',
  templateUrl: './expansion-notif.component.html',
  styleUrls: ['./expansion-notif.component.scss']
})
export class ExpansionNotifComponent implements OnInit {
  @Input() public description!: string;
  @Input() public userFrom!: string;
  @Input() public userEmailFrom!: string;
  @Input() public userTo!: string;
  @Input() public requestedItem!: string;
  constructor() {
    //
  }

  ngOnInit(): void {
    //do
    console.log("aa");
  }

  markRead() {
    console.log("HELLo");
  }

}
