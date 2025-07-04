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
fetch('nav_bar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('nav_bar').innerHTML = data;
        loadFromHash(); // load page content according to hash
    });

window.onhashchange = () => {
    loadFromHash(); 
};

function loadFromHash() {
    let hash = window.location.hash.substr(1);
    if (!hash) {
        hash = 'home.html';
        window.location.hash = '#home.html';
    }
    const link = document.querySelector(`a[href="#${hash}"]`);
    loadPage(hash, link);
}
function loadPage(page, link = null) {
    fetch(page)
        .then(res => res.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });

    if (link) {
        document.querySelectorAll('nav ul li a').forEach(el => el.classList.remove('active'));
        link.classList.add('active');
    }
}