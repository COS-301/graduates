import { Test } from '@nestjs/testing';
import { ApiAdminconsoleApiFeatureController } from './api-adminconsole-api-feature.controller';

describe('ApiAdminconsoleApiFeatureController', () => {
  let controller: ApiAdminconsoleApiFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiAdminconsoleApiFeatureController],
    }).compile();

    controller = module.get(ApiAdminconsoleApiFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});

//Example testing to be changed later
//to run api specific tests type // nx test api-adminconsole-api-feature //
//import functions to be tested
import {add} from './api-adminconsole-api-feature.controller';
import {Testing} from './api-adminconsole-api-feature.controller';
import {uri} from './api-adminconsole-api-feature.controller';
import {name} from './api-adminconsole-api-feature.controller';
import {array} from './api-adminconsole-api-feature.controller';
import {fetchexample} from './api-adminconsole-api-feature.controller';

//Example of a simple test to be run 1+4=5
test('Addition 1+4=5',()=>{
  expect(add(1,4)).toBe(5);//call imported function to be tested
});

//Example of a simple test that fails 1+4=3
/*test('Addition 1+4=5',()=>{
  expect(add(1,4)).toBe(3);//call imported function to be tested
});*/

//Testing classes
//
//testing atributes of class
test('Testing class construction',()=>{
  const test:Testing = new Testing("test1",500,"CS",false); 
  expect(test.userName).toBe("test1");
  expect(test.id).toBe(500);
  expect(test.course).toBe("CS");
  expect(test.done).toBeFalsy;//test for false and can also be used to test for undefined
});

//testing class methods
test('Testing class methods',()=>{
  const test:Testing = new Testing("test1",500,"CS",false); 
  expect(test.getuserName()).toBe("test1");
  expect(test.getid()).toBe(500);
  expect(test.getcourse()).toBe("CS");
  expect(test.isdone()).toBeFalsy;//test for false and can also be used to test for undefined
});

//Testing returns that need to be specifically formatted
//simple example using email

test('Testing URI format using regex', () => {
  const regex = /^([^:]*):([^:]*):(.*)$/;
  expect(uri()).toMatch(regex);
});

//Testing returns that use .contains
test('String should contain --Testing--',()=>{
  expect(name()).toContain("--Testing--");
});

//Testing objects with .equals
//Testing numbers array
test('Array should be 1,2,3,4',()=>{
  const arr:number[] = [1,2,3,4];
  expect(array()).toEqual(arr);//use .toEqual to compare objects
});

//Async testing
test('the data is example', async () => {
  const data:string = await fetchexample();
  expect(data).toBe('example');
});

/*test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchexample();
  } catch (e) {
    expect(e).toMatch('error');
  }
});*/

