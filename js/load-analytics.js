// Load Google Analytics
(function() {
  fetch('/templates/google-analytics.html')
    .then(response => response.text())
    .then(html => {
      const temp = document.createElement('div');
      temp.innerHTML = html;
      document.head.appendChild(temp.firstElementChild);
      document.head.appendChild(temp.lastElementChild);
    })
    .catch(err => console.log('Analytics not loaded'));
})();
