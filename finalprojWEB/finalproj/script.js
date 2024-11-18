document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {

            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');

            updateButtonStyles();
        });
    }

    function updateButtonStyles() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (document.body.classList.contains('dark-mode')) {
                button.classList.add('dark-mode');
            } else {
                button.classList.remove('dark-mode');
            }
        });
    }

    updateButtonStyles();

    const quoteButton = document.getElementById('quoteButton');
    const quoteText = document.getElementById('quoteText');
    if (quoteButton && quoteText) {
        quoteButton.addEventListener('click', function () {
            quoteText.textContent = `"Choose a job you love, and you will never have to work a day in your life." — Confucius`;
        });
    }

    const learnMoreButton = document.querySelector('.animated-btn');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function () {
            alert('Learn more about For People!');
        });
    }


    const toggleTeamButton = document.getElementById('toggleTeamButton');
    const teamList = document.getElementById('teamList');
    if (toggleTeamButton && teamList) {
        toggleTeamButton.addEventListener('click', function () {
            teamList.style.display =
                teamList.style.display === 'none' || teamList.style.display === '' ? 'block' : 'none';
        });
    }

    const helloButton = document.getElementById('helloButton');
    const helloText = document.getElementById('helloText');
    if (helloButton && helloText) {
        helloButton.addEventListener('click', function () {
            helloText.textContent = 'Hello';
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
                contactForm.reset();
            }
        });
    }

    
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!email || !password) {
                alert('Please enter both email and password.');
            } else {
                alert('Login successful!');
            }
        });
    }


    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const imagesContainer = document.querySelector(".job-images");
    const images = document.querySelectorAll(".job-image");

    let currentIndex = 0;

    function updateImages() {
        const offset = -currentIndex * (images[0].offsetWidth + 10); 
        imagesContainer.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImages();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImages();
    });
});
