// e2e testing to go here please seee below for example

//To run the cypress test suite use the command: "yarn nx run-many --target=e2e --all"
import { getGreeting } from '../support/app.po';

//Example Test
describe('client', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file  
    //TODO setup proper e2e testing for client
  });
});

describe('client notifications testing', () => {
  beforeEach(() => cy.visit('/notifications'));

  //Test if the main notifications component has rendered properly
  it('should contain notification board', () => {
    cy.contains('Notification board');
  });

});

describe('Company Representative Feature', () => {

  beforeEach(() => {
      cy.visit('http://localhost:4200/CompanyRepresentativeLogin');
  })

  it('should allow representative to login', () => {

      cy.get('.email').type('ishe.dzingirai@gmail.com');
      cy.get('.password').type('${IamACSStudent@1}{enter}');
      cy.get('.btn btn-primary').click().visit('http://localhost:4200/CompanyRepresentativeHome');
  
  });

});

describe('Company Representative Update Details', () => {

  beforeEach(() => {
      cy.visit('http://localhost:4200/CompanyRepresentativeEdit');
  })

      it('should allow representative to update details', () => {
          cy.get('#name').type('Tester Role');
          cy.get('#title').type('Software Tester');
          cy.get('textarea[name=experience]').type('Beginner');
          cy.get('textarea[name=about]').type('Looking for Graduate Machine Learning Engineers');
          cy.get('#number').type('0812347623');
          cy.get('#locaton').type('Hatfield, Pretoria');
          cy.get('#email').type('tester@gmail.com');
          cy.get('#website').type('tester.up.ac.za');
          cy.get('#linkedin').type('tester@linkedin.com');
          cy.get('#twitter').type('tester@twitter.com');
          cy.get('#instagram').type('tester@instagram.com');
          cy.get('#facebook').type('tester@facebook.com'); 
          cy.get('#snapchat').type('tester@snapchat.com');
          cy.get('#github').type('tester@github.com');

          cy.get('#submit').click();

      
          });

  });
