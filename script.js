// 🎈 Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("You clicked the button!");
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
    console.log(`Key pressed: ${e.key}`);
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
    document.getElementById("secretMessage").classList.remove("hidden");
});

// 🎮 Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");

        // Pause video when slide is hidden
        const video = slide.querySelector("video");
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });

    slides[index].classList.add("active");

    // Autoplay video if visible
    const activeVideo = slides[index].querySelector("video");
    if (activeVideo) {
        activeVideo.play();
    }
}

document.getElementById("prevSlide").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

document.getElementById("nextSlide").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// 🗂️ Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');

        contents.forEach(content => {
            content.classList.remove('active');
        });

        document.getElementById(target).classList.add('active');
    });
});


// 📋 Form Validation
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener("input", () => {
    const feedback = document.getElementById("emailFeedback");
    const valid = /^\S+@\S+\.\S+$/.test(emailInput.value);
    feedback.textContent = valid ? "" : "Please enter a valid email.";
});

passwordInput.addEventListener("input", () => {
    const feedback = document.getElementById("passwordFeedback");
    feedback.textContent = passwordInput.value.length >= 8
        ? ""
        : "Password must be at least 8 characters.";
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
});
