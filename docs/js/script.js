fetch('nav_bar.html')
    .then(result => result.text())
    .then(data => {
        document.getElementById('nav_bar').innerHTML = data;
    });


function loadPage(page, link = null) {
    fetch(page)
        .then(result => result.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });

    if (link) {
        document.querySelectorAll('header nav li a').forEach(Element => {
            Element.classList.remove('active');
        });

        link.classList.add('active')
    }
}
window.onload = () => {
    const homeLink = document.querySelector('a[onclick*="home.html"]');
    if (homeLink) {
        loadPage('home.html', homeLink);
    }
};
