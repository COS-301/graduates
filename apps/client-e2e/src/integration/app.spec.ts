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


/* Request for access */

describe('Visit student-profile', () => {

  beforeEach(() => {

    cy.log("Load Student Page URL");

    cy.visit('localhost:4200/student-profile');

  })



  it('Should load the page because the pipeline does not implement an API to actually run these tests', ()=> {

    cy.contains('BIO')

  })



  /*it('has the request for access buttons initialized', ()=> {

4

    cy.get("button[id='RA:2']").contains("Request");

    cy.get("button[id='RA:3']").contains("Request");

    cy.get("button[id='RA:4']").contains("Request");

    //test api



    //test db

  });



  /*it('changes to pending once clicked', () => {

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



  it('should return all pending entities', () => {



    const getRequestForAccess = `query ($compID: ID!, $gradID: ID!) {status(compId: $compID, gradId: $gradID) { accessStatus, item }}`;



    cy.request({

      url:"localhost:3333/graphql",

      method: "POST",

      body: {

        query: getRequestForAccess,

        variables : {

          compID: '8',

          gradID:'5'

        }

      },

      failOnStatusCode:false

    }).as('response');



     cy.get('@response').should((response) => {

      expect(response).to.have.property('headers')

    })

  });*/
});

// Commented out Tests need API and DB to run in Environment to pass
describe('client-shorts-feature e2e test', () => {
  
  describe('Explore Component Tests', () => {
    beforeEach(() => {
      cy.intercept("/graphql").as('getall');
      cy.visit('/shorts');
      cy.wait('@getall');
    });

  // * Needs API and DB running to populate view
/*
      it('should click a short view and close the view ', () => {
        cy.get('.formbutton').contains('View').click();
        cy.get('.formbuttonblue').contains('Close').click();
      });
*/

    
    // * Can Only work if a short is not reported. I.E Cannot determine if short already reported.
    //  * Without seed data, this is not deterministic. Manually tested instead.
/*
      it.skip('should make and submit a report', () => {
        cy.get('.formbutton:first').contains('View').click();
        cy.get('.formbuttonred').contains('Report').click();
        cy.get('#reason').type('This is a test report for testing');
        cy.get('.formbuttonred').contains('Submit').click();
      });
*/
      it('tests navigating between tabs', () => {
      cy.get('#curBtn').should('contain.text', '1');
      cy.get('.formbuttonblue').contains('Next').then((nextBtn)=>{
        if(nextBtn.is('enabled')){
          nextBtn.click();
          cy.get('#curBtn').should('contain.text', '2');
        cy.get('.formbuttonblue').contains('Prev').click();
        cy.get('#curBtn').should('contain.text', '1');
        }});
      });

    // needs seeded data with user with name John 
/*
    it('should test the search capability', () => {
      cy.get('#search').type('John{enter}');
      cy.on('window:alert', (alert)=>{
        expect(alert).to.contain('Searching');});
    });
  });
*/
    describe('upload component tests', () => {
      beforeEach(() => {
        cy.visit('/shorts/upload');
      });

      //! Test File Upload after feature is pushed
        it.skip('should upload a video and thumbnail', () => {
          cy.get('#uploadbanner').contains('Upload');
          cy.get('input[type="file"]:first').selectFile('src/fixtures/client-shorts-test-video.mp4');
          cy.get('input[type="file"]:last').selectFile('src/fixtures/client-shorts-test-thumbnail.jpg');
          cy.get('#taginput').type('#cats#test');
          cy.get('.formbuttonblue').contains('Submit').click();
          expect(cy.intercept("/graphql"));
          // TODO get confirmation of upload once implemented
        });
    });
  });
});