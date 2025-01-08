document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert the navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);

            // Now that the navbar is inserted, we can safely add the event listener
            document.querySelector('.hamburger').addEventListener('click', () => {
                document.querySelector('.nav-links').classList.toggle('active');
            });
        })
        .catch(error => {
            console.error("Error fetching navbar:", error);
        });
});
