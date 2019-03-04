describe('cypress TinyMce plugin', () => {
  it('has a method to set the content', ()=> {
    const blogTitle = 'The title of the blog';
    const blogContent = 'The contents of the blog';

    cy.visit('/');
    cy.contains('Create new blog').click();
    cy.getTinyMce('content').setContent(blogContent);
    cy.get('#title').type(blogTitle);
    cy.wait(200);
    cy.contains('Save').click();

    cy.contains(blogTitle);
    cy.contains(blogContent);
  });

  it('has a single command to set the content', () => {
    const blogTitle = 'The title of the next blog';
    const blogContent = 'The contents of the next blog';

    cy.visit('/');
    cy.contains('Create new blog').click();
    cy.setTinyMceContent('content', blogContent);
    cy.get('#title').type(blogTitle);
    cy.wait(200);
    cy.contains('Save').click();

    cy.contains(blogTitle);
    cy.contains(blogContent);
  });

  it('has a command to get the content', () => {
    const blogTitle = 'The title of the blog';
    const blogContent = 'The contents of the blog';

    cy.visit('/');
    cy.contains('Create new blog').click();
    cy.setTinyMceContent('content', blogContent);
    cy.getTinyMceContent('content').should('contain', blogContent);
  });
});