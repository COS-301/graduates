import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'graduates-shell-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent{
  constructor(private _router: Router) { }

  navigateToFirst() {
    this._router.navigate(['login'])
  }
}
