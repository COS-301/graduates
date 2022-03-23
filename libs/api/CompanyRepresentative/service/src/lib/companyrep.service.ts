import { Injectable } from '@nestjs/common';
import { CreateCompanyRepresentative } from '@graduates/api-CompanyRepresentative-api-shared-data-access';
import { CompanyRepresentative } from '@graduates/api-CompanyRepresentative-api-shared-data-access';

@Injectable()
export class CompanyrepService {
  async create(data: CreateCompanyRepresentative): Promise<CompanyRepresentative> {
    return data as any;
  }

  async findOneById(id: string): Promise<CompanyRepresentative> {
    const data = {
      id: id,
      name: 'Austin Smith',
      Occupation: 'Software Engineer',
      experience: 'Worked both frontend and backend develop.',
      about_me: 'Very Chilled',
      email: 'austinsmith@gmail.com',
      phone_no: '071 654 987',
      website: 'austin.com',
      connection: ['Amanda CEO', 'Chris Founder'],
    };

    return data;
  }

  async findAll(): Promise<CompanyRepresentative[]> {
    return [] as CompanyRepresentative[];
  }

  async remove(id: number): Promise<boolean> {
    return true;
  }
}
