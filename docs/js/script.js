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
function loadFromHash() {
    let hash = window.location.hash.substr(1); // Remove the '#' sign
    if (!hash) {
        hash = 'home.html'; // default page
        window.location.hash = '#home.html';
    }
    
    const link = document.querySelector('a[onclick*="${hash}"]');
    loadPage(hash, link);
}

window.onload = () => {
    loadFromHash();
};

window.onhashchange = () => {
    loadFromHash();
};