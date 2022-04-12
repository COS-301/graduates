import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'graduates-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {
  @Input() image: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
