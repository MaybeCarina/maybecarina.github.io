document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert the navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);

            const currentPath = window.location.pathname.replace(/^\//, ""); // Remove leading slash

            const navLinks = document.querySelectorAll('.nav-links a');

            navLinks.forEach(link => {
                const linkPath = link.getAttribute('href').replace(/^\//, ""); // Remove leading slash from href

                if (linkPath === currentPath) {
                    link.style.display = 'none'; 
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
