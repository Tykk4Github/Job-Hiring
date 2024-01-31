document.addEventListener('DOMContentLoaded', function () {
    // Get the home button element
    const homeButton = document.getElementById('home');
    const contactButton = document.querySelector('.dropbtn');
    const contactDropdown = document.querySelector('.dropdown-content');

    // Add a click event listener to the home button
    homeButton.addEventListener('click', function () {
        alert("You're already Home");
    });

    // Add a click event listener to the contact button to toggle the dropdown
    contactButton.addEventListener('click', function () {
        contactDropdown.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName('dropdown-content');
            for (let i = 0; i < dropdowns.length; i++) {
                const dropdown = dropdowns[i];
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }
        }
    });
});
