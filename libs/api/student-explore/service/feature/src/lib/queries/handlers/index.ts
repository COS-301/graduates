import { SearchStudentsByTagHandler } from "./search-students-by-tag.handler";
import { SearchStudentsHandler } from "./search-students.handler";
import { FilterStudentsHandler } from "./filter-students.handler";
import { InitStudentsHandler } from "./init-students.handler";
import { AvailableHandler } from "./available.handler";

export const QueryHandlers = [SearchStudentsByTagHandler, SearchStudentsHandler, FilterStudentsHandler, InitStudentsHandler, AvailableHandler];