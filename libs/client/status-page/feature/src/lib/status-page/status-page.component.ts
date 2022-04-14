import { Component } from '@angular/core';

@Component({
  selector: 'graduates-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent {
  statusImages: string[] = [
    "https://icon-library.com/images/tick-icon-png/tick-icon-png-17.jpg",
    "https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-4.jpg",
    "https://icon-library.com/images/warning-icon-svg/warning-icon-svg-18.jpg"
  ]
}
