// e2e testing to go here please seee below for example

//To run the cypress test suite use the command: "yarn nx run-many --target=e2e --all"
import { method } from 'cypress/types/bluebird';
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

  //Test if it redirects to the right feature. (Checks if "notifications" is part of the URL)
  it('should contain notification board', () => {
    cy.url().should('include','notifications');
  });

  //Test if the main notifications component has rendered properly
  it('should contain notification board', () => {
    cy.contains('Notification board');
    cy.get('button').click();
  });

  //Test if a notification query can be called from API successfully
  it('should return a response', () => {

    const getnotificationsAll = `query {
      notificationsAll {
          id,
          data{notificationType},
          userIdTo,
          userIdFrom
      }
    }`;
    cy.request({
      url:"/notifications",
      method: "POST",
      body: {
        query: getnotificationsAll
      },
      failOnStatusCode:false
    }).as('response');

    cy.get('@response').should((response) => {
      expect(response).to.have.property('headers')
    })
  });

});
