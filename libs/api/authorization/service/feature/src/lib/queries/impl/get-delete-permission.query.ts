export class GetDeletePermissionCommand {
  constructor(
    public readonly userType: string,
    public readonly isUserPermitted: boolean
  ) {}
}
