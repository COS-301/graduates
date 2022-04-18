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
    cy.visit('http://localhost:4200/student-profile');
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
  });*/
})


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
  




