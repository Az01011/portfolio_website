document.addEventListener('DOMContentLoaded', function() {
    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    function handleIntersection(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                entry.target.classList.remove('appear');
            }
        });
    }

    var observer = new IntersectionObserver(handleIntersection, observerOptions);
    var scrollElements = document.querySelectorAll('.scroll-fade, .scroll-fade-left, .scroll-fade-right');
    
    scrollElements.forEach(function(element) {
        observer.observe(element);
    });
});



/*dark mode toggle button */
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
