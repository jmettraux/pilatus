
//
// pilatus.js
//
// (c) 2008 John Mettraux 
// http://github.com/jmettraux/pilatus
//
// License is MIT
//

var Pilatus = function() {

  function createElt (parentElt, eName, eAttributes, eText) {
    var e = document.createElement(eName);
    if (eAttributes) {
      for (var k in eAttributes) { e.setAttribute(k, eAttributes[k]); }
    }
    if (eText) e.appendChild(document.createTextNode(eText));
    parentElt.appendChild(e);
    return e;
  }

  function loadAndRender (parentDivId, pipeUrl) {

    var t = (new Date()).getTime();
    var callbackName = "_" + t + "_pilatus_callback";

    createElt(
      document.body,
      'script',
      {},
      "function " + callbackName + " (json) {"+
      " Pilatus.render('"+parentDivId+"', json); }");

    pipeUrl += ('&_render=json&_callback=' + callbackName);

    createElt(
      document.body,
      'script',
      { 'src': pipeUrl });
  }

  var ITEM_KEYS = [
    [ 'title' ],
    [ 'author', 'name' ],
    [ 'pubDate' ]
  ];

  function render (parentDivId, json) {

    var l = json.value.items.length;
    if (l > 20) l = 20;

    var parentDiv = document.getElementById(parentDivId);

    for (var i=0; i < l; i++) {

      var item = json.value.items[i];

      var eEntry = createElt(
        parentDiv, 'div', { 'class': 'pilatus_entry' });

      for (var j in ITEM_KEYS) {
        var k = ITEM_KEYS[j];
        var kl = 'pilatus_' + k.join('_');
        var sk = k[1];
        k = k[0];
        var v = item[k];
        if (sk) v = v[sk];
        var e = createElt(eEntry, 'div', { 'class': kl }, v);
      }

      var eLink = createElt(eEntry, 'div', { 'class': 'pilatus_link' });
      eLink.innerHTML = '<a href="' + item.link + '">' + item.link + '</a>';

      if (item.content) {
         var eContent = createElt(
           eEntry, 'div', { 'class': 'pilatus_content' });
         eContent.innerHTML = item.content.content;
      }
    }
  }

  return { 
    render: render,
    loadAndRender: loadAndRender
  };
}();

