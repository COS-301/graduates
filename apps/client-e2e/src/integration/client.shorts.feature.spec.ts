describe('client-shorts-feature e2e test', () => {

    describe('Explore Component Tests', () => {
      beforeEach(() => cy.visit('/shorts'));
  
      it('should display shorts page', () => {
        cy.get('h1').contains('Student Shorts');
      });
  
      it('should click short view and close the view', () => {
        cy.get('.mat-grid-tile:first > .mat-grid-tile-content > #card > .mat-card-content > .grid > :nth-child(1) > #cardHeader > #cardbuttton').click();
        cy.get('.formbuttonblue').contains('Close').click();
      });
  
      it('should make and submit a report', () => {
        cy.get('.mat-grid-tile:first > .mat-grid-tile-content > #card > .mat-card-content > .grid > :nth-child(1) > #cardHeader > #cardbuttton').click();
        cy.get('.formbuttonred').contains('Report').click();
        cy.get('#reason').type('This is a test report');
        cy.get('.formbuttonred').contains('Submit').click();
        cy.get('.formbuttonblue').contains('Continue').click();
      });
  
      it('tests navigating between tabs', () => {
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