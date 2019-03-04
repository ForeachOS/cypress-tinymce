Cypress.Commands.add('getTinyMce', (tinyMceId) => {
  cy.window().then((win) => {
    return win.tinymce.editors[tinyMceId];
  });
});

// Cypress.Commands.add('setContent', {prevSubject: true}, (subject, content) => {
//   subject.setContent(content);
//   return subject;
// });