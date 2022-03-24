import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiCompanyExploreService {
    public async findOneById(companyID: string): Promise<any[]> {
        const company = [];
        if (companyID == '145000') company.push('Software Development co.');
        else company.push('145000');
        company.push('Software Development co.');
    
        return company;
      }
}