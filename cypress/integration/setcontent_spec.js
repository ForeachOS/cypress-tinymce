describe('cypress TinyMce plugin', () => {
  const blogTitle = 'The title of the blog';
  const blogContent = 'The contents of the blog';

  it('has a method to set the content', ()=> {
    cy.visit('/');
    cy.contains('Create new blog').click();
    cy.getTinyMce('content').setContent(blogContent);
    cy.get('#title').type(blogTitle);
    cy.wait(200);
    cy.contains('Save').click();

    cy.contains(blogTitle);
    cy.contains(blogContent);
  });
});