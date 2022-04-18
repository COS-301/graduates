// e2e testing to go here please seee below for example

//To run the cypress test suite use the command: "yarn nx run-many --target=e2e --all"
import { before } from 'cypress/types/lodash';
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


/* Request for access */
describe('Visit student-profile', () => {
  before(() => {
    cy.log("Load Student Page URL");
    cy.visit('http://localhost:4200/student-profile');
  })
  

  it('has the request for access buttons initialized', ()=> {
4
    cy.get("button[id='RA:2']").contains("Request");
    cy.get("button[id='RA:3']").contains("Request");
    cy.get("button[id='RA:4']").contains("Request");
    //test api

    //test db
  });

  it('changes to pending once clicked', () => {
    cy.get("button[id='RA:0']").click();
    cy.get("button[id='RA:0']").contains('Pending');
  });

  it('requests access using the API', () => {
    cy.get("button[id='RA:1']").click();

    cy.intercept({
      url: 'localhost:3333/graphql',
      method: 'POST'
    }).as('requestAccess');
  });
})
