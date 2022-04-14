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

//Example of a simple test to be run 1+4=5
test('Get User Token from ID',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();//call imported function to be tested
  const data = await test.getId("temp@gmail.com");
  expect(data).toBe("1");
});

test('Test falsy email',async ()=>{
  expect.assertions(1);
  const test:AuthenticationRepository = new AuthenticationRepository();//call imported function to be tested
  expect(await test.setToken("", "bGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpv", 0, 172938459)).toThrow("email"); 
});

test('Test falsy token',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();//call imported function to be tested
  expect(await test.setToken("test@gmail.com", "", 0, 172938459)).toThrow();
});

test('Test incorrect token_type',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();//call imported function to be tested
  expect(await test.setToken("test@gmail.com", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", 5, 172938459)).toThrow();
});

test('Test incorrect token_expiration',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();//call imported function to be tested
  expect(await test.setToken("test@gmail.com", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", 1, 0)).toThrow();
});

test('Set User Token from ID',async ()=>{
  const test:AuthenticationRepository = new AuthenticationRepository();//call imported function to be tested
  const data = await test.setToken("temp@gmail.com", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", 0, 172938459);  
  expect(data).toBe("Token Created Successfully");
});



