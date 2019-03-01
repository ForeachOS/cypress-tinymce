
function _setTinyMceFocus(tinymce, tinyMceId )
{
  tinymce.execCommand( 'mceFocus', false, tinyMceId );
}

function _resetTinyMceCursor(tinymce, tinyMceId, beforeText )
{
  var ed = tinymce.editors[tinyMceId];
  var doc = ed.getDoc();

  var win = doc.defaultView || doc.parentWindow;
  var sel = win.getSelection();
  sel.removeAllRanges();

  var range = doc.createRange();
  range.selectNodeContents( beforeText ? ed.dom.getRoot().firstChild : ed.dom.getRoot().lastChild );
  range.collapse( beforeText );
  sel.addRange( range );
}

Cypress.Commands.add('tinyMceSetContent', (tinyMceId, text) => {
  cy.window().then((win) => {
    // _setTinyMceFocus(win.tinymce, tinyMceId );

    win.tinymce.editors[tinyMceId].setContent( text );

    // _resetTinyMceCursor(win.tinymce, tinyMceId, false );

    // win.tinymce.execCommand('mceFocus', false, tinyMceId)
    //
    // win.tinymce.get(tinyMceId).setContent(content);
    //
    // var ed = win.tinymce.editors[tinyMceId];
    // var doc = ed.getDoc();
    //
    // var parentWindow = doc.defaultView || doc.parentWindow;
    // var sel = parentWindow.getSelection();
    // sel.removeAllRanges();
    //
    // var range = doc.createRange();
    // range.selectNodeContents( false ? ed.dom.getRoot().firstChild : ed.dom.getRoot().lastChild );
    // range.collapse( false );
    // sel.addRange( range );

  });
});
