export class GetAllUserNotificationsQuery {}

export class GetNotificationByIdQuery {
    constructor(public readonly id: string) {}
}

export class GetNotificationsReceivedQuery {
    constructor(public readonly userId: string) {}
}

export class GetNotificationsSentQuery {
    constructor(public readonly userId: string) {}
}

export class GetNotificationsByTypeQuery {
    constructor(public readonly userId: string, public readonly notificationType: string) {}
<<<<<<< HEAD
}
=======
}

export class GetUserObjectQuery {
    constructor(public readonly userId: string) {}
}
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
