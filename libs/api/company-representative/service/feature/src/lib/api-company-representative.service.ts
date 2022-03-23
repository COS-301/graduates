import { CompanyRepresentative, CompanyRepresentativeCreate } from '@graduates/api/company-representative/api/shared/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiCompanyRepresentativeService {
    async create(
        data: CompanyRepresentative
      ): Promise<CompanyRepresentativeCreate> {
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
