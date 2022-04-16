export class SetAccessStatus {
  static readonly type = '[Access] Set Access Status';
  constructor(public item: string, public status: string, public idx: number) {}
}
