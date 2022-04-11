// import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
// import { CreateShortCommand } from '../impl/ApiShortsCommand.command';
// import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
// import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';
// import { CreateShortEvent } from '../../events/ApiShortsCreateShortEvent.event';

// @CommandHandler(CreateShortCommand)
// export class CreateShortHandler implements ICommandHandler<CreateShortCommand> {
//   constructor(
//     private readonly repository: ShortsRepository,
//     private publisher: EventPublisher
//   ) {}

//   async execute(command: CreateShortCommand) {
//     const { userId, datePosted, archived, user, media, data } = command;

//     const ShortModel = this.publisher.mergeObjectContext(
//       await this.repository.createShort(userId, datePosted, archived, user, media, data);
//     );

//     const short = new ShortModel();
//     short.userId = userId;
//     short.media = media;
//     short.data = data;
//     short.datePosted = datePosted;
//     short.archived = archived;
//     short.user = user;

//     short.apply(new CreateShortEvent(userId, datePosted, archived, user, media, data));

//     short.commit();

//     return short;
//   }
// }
