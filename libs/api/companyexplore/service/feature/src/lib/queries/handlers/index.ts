import { GetCompByIdHandler } from './get-company-by-id.handler';
import { GetTaggedCompHandler } from './get-companies-by-tag.handler';
import { GetDefaultCompHandler } from './get-companies-default.handler';
import { GetSearchHandler } from './get-companies-search.handler';

export const QueryHandlers = [GetCompByIdHandler,GetTaggedCompHandler,GetDefaultCompHandler,GetSearchHandler];
