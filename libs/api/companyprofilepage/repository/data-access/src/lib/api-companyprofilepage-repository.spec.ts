import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { CompanyProfilePage } from './api-companyprofilepage-repository';

test('check company info', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.getCompanyById('545618646');
    console.log(call);
})

test('check email', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.getCompanyEmail('545618646');
    console.log(call);
})

test('check location', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.getCompanyLocations('545618646');
    console.log(call);
})

test('check profile', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.getCompanyProfile('545618646');
    console.log(call);
})

test('check social media', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.getCompanySocialMedia('545618646');
    console.log(call);
})

test('check profile file', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.getCompanyProfileFile('545618646');
    console.log(call);
})

test('check contact number', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.getCompanyContactNumber('545618646');
    console.log(call);
})

test('check edit profile', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.editCompanyProfile('545618646', 'profilepic.jpg', 'A new bio to input');
    console.log(call);
})

test('check edit social media', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.editCompanySocialMedia('545618646', 'FACEBOOK', 'facebooklink.test');
    console.log(call);
})

test('check edit location', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.editCompanyLocations('545618646', 'a brand new location');
    console.log(call);
})


test('check edit contact number', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.editCompanyContactNumber('545618646', '5550138456');
    console.log(call);
})

test('check edit email', async () => {
    const data = new CompanyProfilePage(new PrismaService)
    const call = await data.editCompanyEmail('545618646', 'brandnew@email.com');
    console.log(call);
})