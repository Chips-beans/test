// fetch('nav_bar.html')
//     .then(res => res.text())
//     .then(data => {
//         document.getElementById('nav_bar').innerHTML = data;
//     });


// function loadPage(page, link = null) {
//     fetch(page)
//         .then(result => result.text())
//         .then(data => {
//             document.getElementById('content').innerHTML = data;
//         });

//     if (link) {
//         document.querySelectorAll('header nav li a').forEach(Element => {
//             Element.classList.remove('active');
//         });

//         link.classList.add('active')
//     }
// }
// window.onload = () => {
//     const homeLink = document.querySelector('a[onclick*="home.html"]');
//     if (homeLink) {
//         loadPage('home.html', homeLink);
//     }
// };
// Load the nav bar first
// Load nav bar first
fetch('nav_bar.html')
  .then(result => result.text())
  .then(data => {
    document.getElementById('nav_bar').innerHTML = data;

    // After nav is loaded, set up page loading
    setupNavigation();
    loadFromHash(); // load the page from URL
  });

function setupNavigation() {
  // Load content again when hash changes (user clicks or refreshes)
  window.onhashchange = () => {
    loadFromHash();
  };
}

function loadFromHash() {
  let hash = window.location.hash.substr(1); // get text after #
  if (!hash) {
    hash = 'home.html'; // if empty, show home
    window.location.hash = '#home.html';
  }

  const link = document.querySelector(`a[href="#${hash}"]`);
  loadPage(hash, link);
}

function loadPage(page, link = null) {
  fetch(page)
    .then(result => result.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
    });

  if (link) {
    document.querySelectorAll('nav ul li a').forEach(el => {
      el.classList.remove('active');
    });
    link.classList.add('active');
  }
}