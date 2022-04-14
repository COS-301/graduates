import { Component, Input } from '@angular/core';

@Component({
  selector: 'graduates-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent {
  @Input() image = "";
}
