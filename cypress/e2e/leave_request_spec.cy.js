describe('Leave Request Tests', () => {
  before(() => {
    cy.visit('/'); 
    cy.get('input[name="login"]').type('testuser'); 
    cy.get('input[name="password"]').type('[jjZJVTxxa71'); 
    cy.get('#send').click(); 
    cy.url().should('include', '/');
    
  });

  beforeEach(() => {
    cy.visit('/leaves/create'); 
  });

  it('Make a leave request', () => {
    cy.get('#type').should('be.visible'); 
    cy.get('input[name="viz_startdate"]').should('be.visible');
    cy.get('input[name="viz_enddate"]').should('be.visible');
    cy.get('input[name="duration"]').should('have.attr', 'readonly');
    cy.get('textarea[name="cause"]').should('be.visible');
    cy.contains('button', 'Planned').should('be.visible');
    cy.contains('button', 'Requested').should('be.visible');
    cy.contains('a', 'Cancel').should('be.visible');
    cy.get('.selection').click();
    cy.contains('.select2-results__option','Absence Maladie').click();
    cy.get('#viz_startdate').type('01/10/2025').click(); 
    cy.get('body').click(); 
    cy.get('#startdatetype').select('Afternoon').should('have.value', 'Afternoon');
    cy.get('body').click(); 
    cy.get('#viz_enddate').type('01/25/2025').click();
    cy.get('body').click();
    cy.get('#enddatetype').select('Morning').should('have.value', 'Morning');
    cy.wait(500); 
    cy.get('input[name="duration"]').should('not.have.value', ''); 
    cy.get('#duration').invoke('val');
    cy.get('#duration').invoke('val').then((duration) => {
      console.log('La durée calculée est:', duration); 
    });
    cy.get('textarea[name="cause"]').type('Ma cause');
    cy.contains('button', 'Requested').click();
    cy.wait(1500); 
    cy.get('#flashbox').should('contain', 'The leave request has been successfully created');
  });
  
  it('Cancel a leave request', () => {
    cy.get('input[name="login"]').type('testuser'); 
    cy.get('input[name="password"]').type('[jjZJVTxxa71'); 
    cy.get('#send').click();
    cy.url().should('include', '/');
    cy.contains('a', 'Cancel').click();
  });


});
