(function () {
  var NAV_VERSION = '6';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'nav.html?v=' + NAV_VERSION, false);
  xhr.send(null);
  if (xhr.status === 200 || xhr.status === 0) {
    document.getElementById('nav-include').outerHTML = xhr.responseText;
  }
})();
