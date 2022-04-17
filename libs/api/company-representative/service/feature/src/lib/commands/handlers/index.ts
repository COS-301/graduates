import { DeleteRepresentativeHandler } from "./deleteRepresentative.handler";
import { CreateRepresentativeHandler } from "./createRepresentativeHandler.handler";
import { UpdateRepresentativeHandler } from "./updateCompanyRepresentativeHandler.handler";
import { GetDefaultRepresentativeHandler } from "./getDefaultRepresentative.handler";

export const CommandHandlers = [UpdateRepresentativeHandler,DeleteRepresentativeHandler,CreateRepresentativeHandler, GetDefaultRepresentativeHandler];
