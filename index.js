Cypress.Commands.add('getTinyMce', (tinyMceId) => {
  cy.window().then((win) => {
    return win.tinymce.editors[tinyMceId];
  });
});

Cypress.Commands.add('setContent', {prevSubject: true}, (subject, content) => {
  subject.setContent(content);
  return subject;
});

Cypress.Commands.add('setTinyMceContent', (tinyMceId, content) => {
  cy.window().then((win) => {
    const editor = win.tinymce.editors[tinyMceId];
    editor.setContent(content);
  });
});

Cypress.Commands.add('getTinyMceContent', (tinyMceId, content) => {
  cy.window().then((win) => {
    const editor = win.tinymce.editors[tinyMceId];
    return editor.getContent();
  });
});
