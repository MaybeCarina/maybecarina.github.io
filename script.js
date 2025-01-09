document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert the navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);

            const currentPath = window.location.pathname; 

            const navLinks = document.querySelectorAll('.nav-links a');

            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.parentElement.classList.add('active'); 
                }
            });

            document.querySelector('.hamburger').addEventListener('click', () => {
                document.querySelector('.nav-links').classList.toggle('active');
            });
        })
        .catch(error => {
            console.error("Error fetching navbar:", error);
        });
});
