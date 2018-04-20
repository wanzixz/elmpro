(function (doc, win) {
  let metaEle = document.getElementById('js_metaEle');
  let docEl = doc.documentElement;
  if (docEl.clientWidth === 980) {
    metaEle.setAttribute('content', 'target-densitydpi=device-dpi,width=device-width,user-scalable=no,initial-scale=1' + ',maximum-scale=1,minimum-scale=1');
  }
  let resizeEvt = 'orientationchange' in window
    ? 'orientationchange'
    : 'resize';
  var recalc = function () {
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    var fontSize = 100 * (clientWidth / 750);
    fontSize = fontSize >= 64
      ? 64
      : fontSize;
    docEl.style.fontSize = fontSize + 'px';
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
