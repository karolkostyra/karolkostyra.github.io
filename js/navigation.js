const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function setActiveLink(id) {

    links.forEach(link => {

        link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + id
        );

    });

}

window.addEventListener('scroll', () => {

    let activeSection = null;

    const triggerPoint =
        window.innerHeight / 2;

    sections.forEach(section => {

        const rect =
            section.getBoundingClientRect();

        if (
            rect.top <= triggerPoint &&
            rect.bottom >= triggerPoint
        ) {
            activeSection = section.id;
        }

    });

    if (activeSection) {
        setActiveLink(activeSection);
    }

});