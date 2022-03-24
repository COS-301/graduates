import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './api-authentication-api-feature.controller';
import { AppService } from './api-authentication-api-feature.service';
import '@types/jest';

describe('AppController', () => {
    let appController: AppController;
  
    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        controllers: [AppController],
        providers: [AppService],
      }).compile();
  
      appController = app.get<AppController>(AppController);
    });
  
    describe('root', () => {
      it('should return "Hello World!"', () => {
        expect(appController.getHello()).toBe('Hello World!');
      });
    });
  });