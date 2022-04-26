import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss'],
})
export class StatusCardComponent implements OnInit {
  operationalImage =
    'https://icon-library.com/images/tick-icon-png/tick-icon-png-17.jpg';
  nonOperationalImage =
    'https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-4.jpg';
  underDevelopmentImage =
    'https://icon-library.com/images/warning-icon-svg/warning-icon-svg-18.jpg';

  image = '';

  @Input() status: any;

  ngOnInit(): void {
    if (this.status.status == 'Operational') {
      this.image = this.operationalImage;
    } else if (this.status.status == 'Under Development') {
      this.image = this.underDevelopmentImage;
    } else if (this.status.status == 'Non Operational') {
      this.image = this.nonOperationalImage;
    }
  }
}
