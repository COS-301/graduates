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

//e2e testing for adminconsole
describe('client admin-console testing', () => {
    beforeEach(() => cy.visit('/admin-console'));

    //test if admin-console is in the url 
    it('should contain admin-console in the url', () => {
      cy.url().should('include','admin-console');
    });

    //test if page layout is correct
    it('admin-console navbar',()=>{
      cy.get("div[class=sidenav]").contains("Create User");
      cy.get("div[class=sidenav]").contains("Users");
      cy.get("div[class=sidenav]").contains("Story");
      cy.get("div[class=sidenav]").contains("Roles");
      cy.get("div[class=sidenav]").contains("Blogs");
      cy.get("div[class=sidenav]").contains("Shorts");
    })

    it('admin-console Create User page inputs',()=>{
      cy.get("input[id=Name]");
      cy.get("input[id=Surname]");
      cy.get("input[id=Email]");
      cy.get("input[id=Number]");
      cy.get("input[id=ID]");
      cy.get("input[id=CV]");
    })

    it('admin-console Create User page buttons',()=>{
      cy.get("button[id=usersSaveButton]");
    })

    //test if navigation to Users page works
    it('admin-console Users page',()=>{
      //move to Users page
      cy.get("li[class=ng-star-inserted]").contains("Users").click();
      //testing layout for users page
      cy.get("input[class=searchbar]");
      cy.get("p[class=userName]");
      cy.get("button[id=permissionsButton]");
      cy.get("div[class=suspensionBar]");
      cy.get("div[id=roleHeader]");
      //testing add permissions functionality
      cy.get("button[id=permissionsButton]").click();
      cy.get("button[class='mat-focus-indicator mat-menu-item ng-tns-c44-1 ng-star-inserted']").contains("Permission 3").click();
      cy.contains("Permission 3");
    })

    //testing navigation to Story page
    it('admin-console Story page',()=>{
      cy.get("li[class=ng-star-inserted]").contains("Story").click();
      //testing layout of story page
      cy.get("div[class=archive]");
      cy.get("input[class=searchbar]");
      cy.get("div[class='archiveDiv ng-star-inserted']");
      cy.get("img[class=sampleImage]");
      cy.get("p[class=userName]");
    })

    //testing navigation
  });

describe('client notifications testing', () => {
  beforeEach(() => cy.visit('/notifications'));

  //Test if it redirects to the right feature. (Checks if "notifications" is part of the URL)
  it('should direct to right url', () => {
    cy.url().should('include','notifications');
  });

  //Test if the main notifications component has rendered properly
  it('should contain notification board', () => {
    cy.contains('Notification board');
    //cy.get('button').click({multiple: true});
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


describe('Company Representative Feature', () => {

  beforeEach(() => {
      cy.visit('/CompanyRepresentativeLogin');
  })

  it('should allow representative to login', () => {

      cy.get('input[type="email"]').type('ishe.dzingirai@gmail.com');
      cy.get('input[type="password"]').type('IamACSStudent@1');
      cy.get('button[type="submit"]').click().visit('/CompanyRepresentativeHome');
  
  });

});

// describe('Company Representative Update Details', () => {

//   beforeEach(() => {
//       cy.visit('/CompanyRepresentativeEdit');
//   })

//       it('should navigate to homepage', () => {
//           //Navigate to homepage after updating details

//           //Run test if api is active, because that is when element is active
//           // cy.get('.submit').click();

      
//       });

//   });


/* Request for access */

// describe('Visit student-profile', () => {

//   beforeEach(() => {

//     cy.log("Load Student Page URL");

//     cy.visit('localhost:4200/student-profile');

//   })



//   it('Should load the page because the pipeline does not implement an API to actually run these tests', ()=> {

//     cy.contains('BIO')

//   })



//   /*it('has the request for access buttons initialized', ()=> {

// 4

//     cy.get("button[id='RA:2']").contains("Request");

//     cy.get("button[id='RA:3']").contains("Request");

//     cy.get("button[id='RA:4']").contains("Request");

//     //test api



//     //test db

//   });



//   /*it('changes to pending once clicked', () => {

//     cy.get("button[id='RA:0']").click();

//     cy.get("button[id='RA:0']").contains('Pending');

//   });



//   it('requests access using the API', () => {

//     cy.get("button[id='RA:1']").click();



//     cy.intercept({

//       url: 'localhost:3333/graphql',

//       method: 'POST'

//     }).as('requestAccess');

//   });



//   it('should return all pending entities', () => {



//     const getRequestForAccess = `query ($compID: ID!, $gradID: ID!) {status(compId: $compID, gradId: $gradID) { accessStatus, item }}`;



//     cy.request({

//       url:"localhost:3333/graphql",

//       method: "POST",

//       body: {

//         query: getRequestForAccess,

//         variables : {

//           compID: '8',

//           gradID:'5'

//         }

//       },

//       failOnStatusCode:false

//     }).as('response');



//      cy.get('@response').should((response) => {

//       expect(response).to.have.property('headers')

//     })

//   });*/
// });



// Commented out Tests need API and DB to run in Environment to pass
describe('client-shorts-feature e2e test', () => {

  describe('Explore Component Tests', () => {
    beforeEach(() => {
      cy.intercept("/graphql").as('getall');
      cy.visit('/shorts');
      cy.wait('@getall');
    });

    it('should navigate to /shorts', () => {
      cy.get('h1').should('contain', 'Student Shorts');
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
      it('should make and submit a report', () => {
        cy.get('.formbutton:first').contains('View').click();
        cy.get('.formbuttonred').contains('Report').click();
        cy.get('#reason').type('This is a test report for testing');
        cy.get('.formbuttonred').contains('Submit').click();
      });
*/

/*
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
*/


    // needs seeded data with uploads with the tag #cats
/*
    it('should test the search capability', () => {
      cy.get('#search').type('#cats{enter}');
      cy.get('#tags').should('contain','#cats');
    });
*/

    describe('upload component tests', () => {
      beforeEach(() => {
        cy.visit('/shorts/upload');
      });

      it('should open upload page', () => {
        cy.get('#uploadbanner').contains('Upload');
      });
      //  * skipping automatic test as to not clutter firebase repo with test data
      //  * add video and thumbnail to test upload with into ../fixtures/ folder
      //  with filenames of client-shorts-test-video.mp4 and client-shorts-test-thumbnail.jpg
        it.skip('should upload a video and thumbnail', () => {
          cy.get('#uploadbanner').contains('Upload');
          cy.get('input[type="file"]:first').selectFile('src/fixtures/client-shorts-test-video.mp4');
          cy.get('input[type="file"]:last').selectFile('src/fixtures/client-shorts-test-thumbnail.jpg');
          cy.get('#taginput').type('#jellyfish#test');
          cy.intercept('/graphql').as('getupload');
          cy.get('.formbuttonblue').contains('Submit').click().as('submit');
          cy.wait('@getupload', {timeout:30000}).then(() => {
            cy.get('.popupcard > #uploadbanner').contains('Successful');
            cy.get('.formbuttonblue').contains('Continue').click();
          });
        });
    });
  });
});

//Student Explore E2E Tests
describe('Student Explore', () => {
  beforeEach(() => cy.visit('http://localhost:4200/student-explore'));

  it('should contain Student Explore', () => {
    cy.contains('Student Explore');
  });

  it('should open the filter tab', () => {
    cy.get('#filter').first().click();
    cy.contains('Filter students');
  });

//   it('should check the Security tag box and apply filter', () => {
//     cy.get('#filter').first().click();
//     cy.contains('Security').click();
//     cy.contains('Filter students').click();
//   });

//   it('checks that the Security filter is applied correctly', () => {
//     cy.get('#filter').first().click();
//     cy.contains('Security').click();
//     cy.contains('Filter students').click();
//     cy.get('.card-grid').should('exist');
//     cy.get('.card-grid').children().nextAll().should('contain', 'Security');
//   });

//   it('checks that the Software Engineering filter is applied correctly', () => {
//     cy.get('#filter').first().click();
//     cy.contains('Software Engineering').click();
//     cy.contains('Filter students').click();
//     cy.get('.card-grid').should('exist');
//     cy.get('.card-grid').children().nextAll().should('contain', 'Software Engineering');
//   });

//   it('checks that the Networking filter is applied correctly', () => {
//     cy.get('#filter').first().click();
//     cy.contains('Networking').click();
//     cy.contains('Filter students').click();
//     cy.get('.card-grid').should('exist');
//     cy.get('.card-grid').children().nextAll().should('contain', 'Networking');
//   });

//   it('checks that search works correctly', () => {
//     cy.get('#search').type('Security{enter}');
//     cy.get('.card-grid').should('exist');
//     cy.get('.card-grid').children().nextAll().should('contain', 'Security');
//   });
});