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
fetch('nav_bar.html')
    .then(result => result.text())
    .then(data => {
        document.getElementById('nav_bar').innerHTML = data;

        // Once nav is ready, load the correct content
        loadFromHash();

        // When the hash (URL part after #) changes, load the new page
        window.onhashchange = () => {
            loadFromHash();
        };
    });

function loadFromHash() {
    let hash = window.location.hash.substr(1); // Get what's after #
    if (!hash) {
        hash = 'home.html'; // Default page
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
