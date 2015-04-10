/*global module:true*/
/*
 * Basic table support with re-entrant parsing, where cell content
 * can also specify markdown.
 *
 * Tables
 * ======
 *
 * | Col 1   | Col 2                                              |
 * |======== |====================================================|
 * |**bold** | ![Valid XHTML] (http://w3.org/Icons/valid-xhtml10) |
 * | Plain   | Value                                              |
 *
 */

(function(){
  var test = function(converter) {
    console.log(11111);
    return [
        {
            type    : 'html', 
            regex: '<img (.*)>',
            replace: '<img class="foo" $1>'
        }
    ];
  };
  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.test = test; }
  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = test;
  }
}());
