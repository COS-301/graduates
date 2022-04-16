export class GetEditPermissionCommand {
  constructor(
    public readonly userType: string,
    public readonly isUserPermitted: boolean
  ) {}
}
