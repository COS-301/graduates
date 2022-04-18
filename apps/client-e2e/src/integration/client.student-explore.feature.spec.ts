describe('client', () => {
    beforeEach(() => cy.visit('http://localhost:4200/student-explore'));

    it('should contain Student Explore', () => {
        cy.contains('Student Explore');
    });

    it('should open the filter tab', () => {
        cy.get('#filter').first().click();
        cy.contains('Filter students');
    });

    it('should check the Security tag box and apply filter', () => {
        cy.get('#filter').first().click();
        cy.contains('Security').click();
        cy.contains('Filter students').click();
    });

    //TODO - fix this test
});