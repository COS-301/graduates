import {PrismaService} from "@graduates/api/shared/services/prisma/data-access";
import {Injectable} from "@nestjs/common";

@Injectable()
export class CompanyRepresentativeRepository {

  constructor(private prismaService : PrismaService) {}

}
