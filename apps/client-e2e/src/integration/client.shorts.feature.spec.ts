describe('client-shorts-feature e2e test', () => {

    describe('Explore Component Tests', () => {
      beforeEach(() => cy.visit('/shorts'));
      it('should click short view and close the view', () => {
        cy.get('.formbutton:first').contains('View').click();
        cy.get('.text-right > .formbuttonblue').contains('Close').click();
      });
  
      it('should make and submit a report', () => {
        cy.get('.formbutton').contains('View').click();
        cy.get('.formbuttonred').contains('Report').click();
        cy.get('#reason').type('This is a test report');
        cy.get('.formbuttonred').contains('Submit').click();
        cy.get('#uploadbanner').should('contain', 'Report Successful');
        cy.get('.formbuttonblue').contains('Continue').click();
      });
  
      // TODO Recreate when nav is updated
      it.skip('tests navigating between tabs', () => {
        cy.get('#curBtn').should('contain.text', '1');
        cy.get('.formbuttonblue').contains('Next').click();
        cy.get('#curBtn').should('contain.text', '2');
        cy.get('.formbuttonblue').contains('Prev').click();
        cy.get('#curBtn').should('contain.text', '1');
      });
    });
  
    describe('upload component tests', () => {
      beforeEach(() => cy.visit('/shorts/upload'));
  
      it('should display then cancel upload component', () => {
        cy.get('.formbuttonblue').contains('Cancel').click();
      });
      it('should upload a cat video', () => {
        cy.get('#uploadbanner').contains('Upload');
        cy.get('input[type="file"]').selectFile('src/fixtures/test.mp4');
        cy.get('#taginput').type('#cats #test');
        cy.get('.formbuttonblue').contains('Submit').click();
  
        // TODO get confirmation of upload once implemented
      });
    });
  
  });