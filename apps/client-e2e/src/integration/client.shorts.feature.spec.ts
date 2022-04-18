
describe('client-shorts-feature e2e test', () => {

  const mockData = {getAllShorts: {data: [
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:,__typename:'Short'},
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:null,__typename:'Short'},
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:null,__typename:'Short'},
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:null,__typename:'Short'},
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:null,__typename:'Short'},
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:null,__typename:'Short'},
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:null,__typename:'Short'},
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:null,__typename:'Short'},
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:null,__typename:'Short'},
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:null,__typename:'Short'},
    {user:{name:'John',__typename:'User'},shortTag:[],userId:'cl24nyhpy00241cprq7rj3br9',id:'cl24o2z9u01411cpr5wus47gf',thumbnail:null,__typename:'Short'}
  ]}};




    describe('Explore Component Tests', () => {
      beforeEach(() => {
        cy.intercept("/graphql", (req)=>{
          req.reply((res)=>{
            res.body = mockData;
          })
        });
        // cy.intercept("/graphql");
        cy.visit('/shorts');
    });
      it('should click a short view and close the view', () => {
        cy.get('.formbutton').contains('View').first().click();
        cy.get('.text-right > .formbuttonblue').contains('Close').click();
      });
  
      it.skip('should make and submit a report', () => {
        cy.get('.formbutton').contains('View').click();
        cy.get('.formbuttonred').contains('Report').click();
        cy.get('#reason').type('This is a test report');
        cy.get('.formbuttonred').contains('Submit').click();
        cy.get('#uploadbanner').should('contain', 'Report Successful');
        cy.get('.formbuttonblue').contains('Continue').click();
      });
  
      // TODO Recreate when nav is updated
      it('tests navigating between tabs', () => {
        cy.get('#curBtn').should('contain.text', '1');
        if(cy.get('#nextBtn').contains('Next')){
        };
        cy.get('.formbuttonblue').contains('Next').click();
        cy.get('#curBtn').should('contain.text', '2');
        cy.get('.formbuttonblue').contains('Prev').click();
        cy.get('#curBtn').should('contain.text', '1');
      });
    });
  
    describe.skip('upload component tests', () => {
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