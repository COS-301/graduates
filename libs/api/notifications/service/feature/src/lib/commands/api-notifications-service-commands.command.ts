export class CreateRequestNotificationCommand {
    constructor(
        public readonly userIdTo: string, 
        public readonly userIdFrom: string,
        public readonly notificationType: string
    ) {}
}

export class UpdateRequestNotificationCommand {
    constructor(
        public readonly id: string,
        public readonly status: string
    ) {}
}

export class UpdateSeenCommand {
    constructor(
        public readonly id: string,
        public readonly seen: boolean
    ) {}
}