export class GetAllUserNotificationsQuery {}

export class GetNotificationByIdQuery {
    constructor(public readonly id: string) {}
}

export class GetNotificationsRecievedQuery {
    constructor(public readonly userId: string) {}
}

export class GetNotificationsSentQuery {
    constructor(public readonly userId: string) {}
}

export class GetNotificationsByTypeQuery {
    constructor(public readonly userId: string, public readonly notificationType: string) {}
}