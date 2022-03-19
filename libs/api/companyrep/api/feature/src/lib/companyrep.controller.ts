import { Controller, Get } from '@nestjs/common';

@Controller('companyrep')
export class CompanyrepController {
    @Get()
    findALL(): string{
        return 'I am a mock'
    }
}
