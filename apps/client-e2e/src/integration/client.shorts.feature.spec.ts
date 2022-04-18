describe('client-shorts-feature e2e test', () => {
    describe('Explore Component Tests', () => {
      beforeEach(() => {
        cy.intercept("/graphql").as('getall');
        cy.visit('/shorts');
        cy.wait('@getall');
    });
      it('should click a short view and close the view', () => {
        cy.get('.formbutton').contains('View').click();
        cy.get('.formbuttonblue').contains('Close').click();
      });
  
      
      /** Can Only work if a short is not reported. I.E Cannot determine if short already reported.
       Without seed data, this is not deterministic. Manually tested instead.
       */
      it.skip('should make and submit a report', () => {
        cy.get('.formbutton:first').contains('View').click();
        cy.get('.formbuttonred').contains('Report').click();
        cy.get('#reason').type('This is a test report for testing');
        cy.get('.formbuttonred').contains('Submit').click();
      });
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

      // needs seeded data with user with name testman 
      it('should test the search capability', () => {
        cy.get('#search').type('Testman{enter}');
        cy.on('window:alert', (alert)=>{
          expect(alert).to.contain('Searching');});
      });
    });
  
    describe('upload component tests', () => {
      beforeEach(() => {
        cy.visit('/shorts/upload');
      });

      //! Test File Upload after feature is pushed
      it('should upload a video and thumbnail', () => {
        cy.get('#uploadbanner').contains('Upload');
        cy.get('input[type="file"]:first').selectFile('src/fixtures/client-shorts-test-video.mp4');
        cy.get('input[type="file"]:last').selectFile('src/fixtures/client-shorts-test-thumbnail.jpg');
        cy.get('#taginput').type('#cats#test');
        cy.get('.formbuttonblue').contains('Submit').click();
        expect(cy.intercept("/graphql"));
        // TODO get confirmation of upload once implemented
        cy.get('.formbuttonblue').contains('Cancel').click();
      });
    });
  });