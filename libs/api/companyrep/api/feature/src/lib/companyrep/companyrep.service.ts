import { Injectable } from '@nestjs/common';
import { Companyrep } from '../companyrep.model';
import { NewCompanyrepInput } from '../new-companyrep.input';

@Injectable()
export class CompanyrepService {
  /**
   * MOCK
   * Put some real business logic here
   */
 
    async create(data: NewCompanyrepInput): Promise<Companyrep> {
        return {
            'response' : 200,
            'id': data.id,
            'name': data.name,
            'Occupation': data.Occupation,
            'experience': data.experience,
            'about_me': data.about_me,
            'email': data.email,
            'phone_no': data.phone_no,
            'website': data.website,
            'connection': data.connection
            } as any;
    }

    async findOneById(id: string): Promise<Companyrep> {
        return {
            'id': id,
            'name': 'Austin Smith',
            'Occupation': 'Software Engineer',
            'experience': 'Worked both frontend and backend develop.',
            'about_me': 'Very Chilled',
            'email': 'austinsmith@gmail.com',
            'phone_no': '071 654 987',
            'website': 'austin.com',
            'connection': ['Amanda CEO', 'Chris Founder']
        } as any;
    }

    async findAll(): Promise<Companyrep[]> {
        return [] as Companyrep[];
    }

    async remove(id: number): Promise<boolean> {
        return true;
    }
}
