import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetAccessStatus } from './actions/request-for-access.actions';
import { RequestForAccessService } from './services/request-for-access.service';

@Component({
  selector: 'graduates-request-for-access-feature',
  templateUrl: './request-for-access.component.html',
  styleUrls: ['./request-for-access.component.scss'],
})
export class RequestForAccessComponent implements OnInit {
  buttons: string[] = [];
  items: string[] = [];
  isFeatureVisible = false;
  companyID: string;
  graduateID: string;

  constructor(private store: Store, private apiService: RequestForAccessService) {
    //make API call to check if the current login token is a company rep, then get the company ID of the company rep.
    this.isFeatureVisible = true;
    this.companyID = "";
    this.graduateID = "";
  }

  ngOnInit(): void {
    const actionsArr: SetAccessStatus[] = [];

    //make API call to access status of resources for particular company
    this.apiService.getResourceStatuses('42', '2').subscribe({
      next: (_res) => {
        for (let i = 0; i < 5; i++) {
          if (_res.data.status[i] != undefined) {
            this.items.push(_res.data.status[i].item);
            actionsArr.push(new SetAccessStatus(_res.data.status[i].item, _res.data.status[i].accessStatus, i));
          }
        }

        this.store.dispatch(actionsArr).subscribe(() => {
          this.store.select(state => state.accessState.accessGranted).subscribe((status) => {
            const arr = status.toString().split(',');
            for (const item of arr) {
              this.buttons.push(item);
            }
          });
        });
      },
      error: (err) => { console.log(err); }
    });
  }

  onClick(idx: number, item: string): void {
    this.store.select(state => state.accessState.accessGranted[idx]).subscribe({
      next: (status) => {
        this.buttons[idx] = status;
        if (status != "Download" && status != "Pending") {
          this.apiService.requestAccess(this.companyID, this.graduateID, item);
          this.store.dispatch(new SetAccessStatus(item, "Pending", idx));
        }
        else {
          // Download resource or open resource in new tab (Release Version 2 Feature)
        }
      },
      error: (err) => { console.log(err); }
    });
  }
}
