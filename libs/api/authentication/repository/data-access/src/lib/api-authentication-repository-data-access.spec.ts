import { Test } from '@nestjs/testing';
import { AuthenticationRepository } from './api-authentication-repository-data-access-admin';

describe('AuthenticationRepository', () => {
  let controller: AuthenticationRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [AuthenticationRepository],
    }).compile();

    controller = module.get(AuthenticationRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});

test('Test falsy entries in userCreation',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();
  await (expect(test.createUser("", "test@gmail.com", false, false, false)).rejects.toThrow("password"));
  await (expect(test.createUser("pass", "", false, false, false)).rejects.toThrow("email"));
  await (expect(test.createUser("pass", "test@gmail.com", null, false, false)).rejects.toThrow("created"));
  await (expect(test.createUser("pass", "test@gmail.com", false, null, false)).rejects.toThrow("suspended"));
  await (expect(test.createUser("pass", "test@gmail.com", false, false, null)).rejects.toThrow("validated"));
});

test('Test falsy entries in tokenDeclaration',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();
  await (expect(test.setToken("", "bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpv", 0, 172938459)).rejects.toThrow("email"));
  await (expect(test.setToken("temp@gmail.com", "", 0, 172938459)).rejects.toThrow("token"));
  await (expect(test.setToken("temp@gmail.com", "bGciOiJIUzI1NiIsInR5cCI6Ik", 10, 172938459)).rejects.toThrow("token_type"));
  await (expect(test.setToken("temp@gmail.com", "bGciOiJIUzI1NiIsInR5cCI6Ik", 0, null)).rejects.toThrow("token_expiration"));
});

test('Get User Id from Email',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();
  const data = await test.getIdFromEmail("temp@gmail.com");
  expect(data).toBe("1");

});test('Get User Role from ID',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();
  const data = await test.getRoleFromId("1");
  expect(data).toBe("student");

});test('Get User Email from ID',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();
  const data = await test.getEmailFromId("1");
  expect(data).toBe("temp@gmail.com");
});

test('Get User Token from Email',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();
  const data = await test.getToken("temp@gmail.com");  
  console.log(data);
  expect(data).toBe("Token Created Successfully");
});

test('Set User Token from ID',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();
  const data = await test.setToken("temp@gmail.com", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", 0, 172938459);  
  expect(data).toBe("Token Created Successfully");
});


test('Get User Token Expiration from Email',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();
  const data = await test.getTokenExpiration("temp@gmail.com");  
  console.log(data);
  expect(data).toBe("Token Created Successfully");
});