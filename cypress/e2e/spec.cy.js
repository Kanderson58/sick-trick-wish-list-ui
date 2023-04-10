describe('empty spec', () => {
  beforeEach('', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks',
      [
        { 
          stance: 'regular', 
          name: 'kickflip', 
          obstacle: 'flat ground', 
          tutorial: 'www.learn2skate.com', 
          id: 1
        }
      ]
    )
    cy.visit('http://localhost:3000/');
  });

  it('should show users existing tricks when page loads', () => {
    cy.get('.trick').contains('kickflip')
      .get('.trick').contains('flat ground')
      .get('.trick').contains('www.learn2skate.com');
  });

  it('should allow users to fill out the form', () => {
    cy.get('#stance')
      .select('regular')
      .should('have.value', 'regular');
    cy.get('#name')
      .type('really cool trick')
      .should('have.value', 'really cool trick');
    cy.get('#obstacle')
      .select('flat ground')
      .should('have.value', 'flat ground');
    cy.get('#tutorial')
      .type('www.reallycooltrick.com')
      .should('have.value', 'www.reallycooltrick.com');
  });

  it('should show new trick when user submits the form', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200
    });

    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', 
      [
        { 
          stance: 'regular', 
          name: 'kickflip', 
          obstacle: 'flat ground', 
          tutorial: 'www.learn2skate.com', 
          id: 1
        }, 
        { 
          stance: 'regular', 
          name: 'really cool trick', 
          obstacle: 'pool', 
          tutorial: 'www.reallycooltrick.com', 
          id: 2
        }
      ]
    );

    cy.get('#stance').select('regular')
      .get('#name').type('really cool trick')
      .get('#obstacle').select('pool')
      .get('#tutorial').type('www.reallycooltrick.com');
    cy.get('button').click()
      .get('.tricks').contains('really cool trick')
      .get('.tricks').contains('pool')
      .get('.tricks').contains('www.reallycooltrick.com');
  })
})