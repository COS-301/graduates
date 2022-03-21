import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Companyrep } from '../../../../api/shared/data-access/src/lib/companyrep.model';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NewCompanyrepInput } from '../../../../api/shared/data-access/src/lib/new-companyrep.input';

@Injectable()
export class CompanyrepService {
  
    async create(data: NewCompanyrepInput): Promise<Companyrep> {
        return data as any;
    }

    async findOneById(id: string): Promise<Companyrep> {
        const data = {
            'id': id,
            'name': 'Austin Smith',
            'Occupation': 'Software Engineer',
            'experience': 'Worked both frontend and backend develop.',
            'about_me': 'Very Chilled',
            'email': 'austinsmith@gmail.com',
            'phone_no': '071 654 987',
            'website': 'austin.com',
            'connection': ['Amanda CEO', 'Chris Founder']
        };

        return data;
    }

    async findAll(): Promise<Companyrep[]> {
        return [] as Companyrep[];
    }

    async remove(id: number): Promise<boolean> {
        return true;
    }
}
