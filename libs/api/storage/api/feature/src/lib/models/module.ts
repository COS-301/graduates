import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AddAll } from '../commands/AddAll';
import { AddID } from '../commands/AddID';
import { AddMime } from '../commands/AddMime';
import { AddPath } from '../commands/AddPath';
import { DeleteAll } from '../commands/DeleteAll';
import { DeleteID } from '../commands/DeleteID';
import { DeleteMime } from '../commands/DeleteMime';
import { DeletePath } from '../commands/DeletePath';
import { GetAll } from '../queries/GetAll';
import { GetID } from '../queries/GetID';
import { GetMime } from '../queries/GetMime';
import { GetPath } from '../queries/GetPath';

@Module({
    imports: [CqrsModule],
    //   controllers: [RegistrationController],
    providers: [
        // UserRegistrationService,
        // UserRepository,
        GetAll,
        GetID,
        GetMime,
        GetPath,

        DeleteAll,
        DeleteID,
        DeleteMime,
        DeletePath,

        AddAll,
        AddID,
        AddMime,
        AddPath
    ],
})
export class StorageModule { }