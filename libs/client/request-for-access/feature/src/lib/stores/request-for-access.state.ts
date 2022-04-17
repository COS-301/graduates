import { SetAccessStatus } from '../actions/request-for-access.actions';
import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

export interface AccessStateModel {
  accessGranted: string[];
}

@State<AccessStateModel>({
  name: 'accessState',
  defaults: {
    accessGranted: new Array(5).fill("Private")
  }
})
@Injectable()
export class AccessState {
  @Action(SetAccessStatus)
  requestAccess(ctx: StateContext<AccessStateModel>, action: SetAccessStatus) {
    const state = ctx.getState();

    const arr = [];
    state.accessGranted.forEach((x) => {
      arr.push(x);
    })
    arr[action.idx] = action.status;

    ctx.setState({
      ...state,
      accessGranted: arr
    });
  }
}
