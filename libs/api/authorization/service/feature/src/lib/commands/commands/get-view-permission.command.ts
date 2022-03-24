export class GetViewPermissionCommand {
  constructor(
    public readonly userType: string,
    public readonly isUserPermitted: boolean
  ) {}
}
