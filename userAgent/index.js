const userAgentChacker = (() => {
  // Opera 8.0+
  let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  // Firefox 1.0+
  let isFirefox = typeof InstallTrigger !== 'undefined';
  // Safari 3.0+ "[object HTMLElementConstructor]"
  let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  // Internet Explorer 6-11
  let isIE = /*@cc_on!@*/false || !!document.documentMode;
  // Edge 20+
  let isEdge = !isIE && !!window.StyleMedia;
  // Chrome 1 - 79
  let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  // Edge (based on chromium) detection
  let isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") !== -1);
  // Blink engine detection
  let isBlink = (isChrome || isOpera) && !!window.CSS;
  let isPC = window.navigator.userAgent.indexOf('Win') > 0 || window.navigator.userAgent.indexOf('Macintosh') > 0;
  const ua = window.navigator.userAgent.toLowerCase();
  let isMobile = (ua.indexOf('macintosh') > -1 && 'ontouchend' in document) || /iphone|ipad|ipod|android/i.test(ua);
  return {
    isOpera,
    isFirefox,
    isSafari,
    isIE,
    isEdge,
    isChrome,
    isEdgeChromium,
    isBlink,
    isPC,
    isMobile
  }
})();