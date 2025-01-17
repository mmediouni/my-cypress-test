describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('/'); // Naviguer à la page de connexion
  });

  it('should display all login elements', () => {
    cy.get('input#login[data-cy="login"]').should('be.visible'); // Nom d'utilisateur
    cy.get('input#password[data-cy="password"]').should('be.visible'); // Mot de passe
    cy.get('button#send').should('be.visible'); // Bouton Login
    cy.get('select#language').should('be.visible'); // Menu déroulant Langue
  });

  it('Should verify language switch functionality', () => {
    // Vérifier que la langue par défaut est "English"
    cy.get('#select2-language-container')
      .should('have.attr', 'title', 'English')
      .and('contain', 'English');
  
    // Changer la langue en "Français"
    cy.get('#select2-language-container').click(); // Ouvrir le menu déroulant
    cy.get('li[id*="-fr"]').click(); // Sélectionner "Français"
  
    // Vérifier que la langue a bien changé
    cy.get('#select2-language-container')
      .should('have.attr', 'title', 'Français')
      .and('contain', 'Français');
  });
  

  it('Should validate login functionality', () => {
    // Remplir les champs et se connecter
    cy.get('input#login[data-cy="login"]').type('testuser'); // Saisir nom d'utilisateur
    cy.get('input#password[data-cy="password"]').type('[jjZJVTxxa71'); // Saisir mot de passe
    cy.get('button#send').click(); // Cliquer sur Login

    // Vérifier redirection vers la page d'accueil
    cy.url().should('eq', 'https://monsiteweb.com.tn/gestion-conge-test/');
    
    cy.get('.pull-right > .brand').should('contain', 'Test USER');

  });
});
