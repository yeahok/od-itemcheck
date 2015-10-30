// ==UserScript==
// @name        Overdrive Item Availability
// @namespace   overdrive.com
// @description Shows currently/total avaiable copies on overdrive
// @include     https://*.libraryreserve.com/*/MyCompleteWishListAvail.htm*
// @run-at      document-end
// @version     1
// @grant       none
// ==/UserScript==
var pics = document.getElementsByClassName('wtil-cover lzld');
for (i = 0; i < pics.length; i++) {
  var url = pics[i].getAttribute('data-original');
  pics[i].setAttribute('src', url);
}
function GM_main() {
  window.onload = function () {
    var x = document.getElementsByClassName('title-data');
    var y = document.getElementsByClassName('tc-author');
    for (i = 0; i < x.length; i++) {
      var count = x[i].getAttribute('data-copiesavail') + '/' + x[i].getAttribute('data-copiestotal');
      //y[i].textContent = y[i].textContent + count;
      var thestring = '<p style="position: absolute; bottom: 5px; left: 0px; padding: 5px; margin: 0;background: rgba(0, 0, 0, 0.75); font-size: large; color: white;">' + count + '</p>';
      console.log(i);
      $('.img-link') [i].innerHTML += thestring;
    }
  }
}
addJS_Node(null, null, GM_main);
//-- This is a standard-ish utility function:
function addJS_Node(text, s_URL, funcToRun, runOnLoad) {
  var D = document;
  var scriptNode = D.createElement('script');
  if (runOnLoad) {
    scriptNode.addEventListener('load', runOnLoad, false);
  }
  scriptNode.type = 'text/javascript';
  if (text) scriptNode.textContent = text;
  if (s_URL) scriptNode.src = s_URL;
  if (funcToRun) scriptNode.textContent = '(' + funcToRun.toString() + ')()';
  var targ = D.getElementsByTagName('head') [0] || D.body || D.documentElement;
  targ.appendChild(scriptNode);
}
