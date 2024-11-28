document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-section");
    const aboutText = document.querySelector(".about-text");

    // Observer for About Me section and text
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutSection.classList.add("show"); // Add 'show' class to section
                    aboutText.classList.add("show"); // Add 'show' class to text
                } else {
                    aboutSection.classList.remove("show"); // Remove 'show' class
                    aboutText.classList.remove("show"); // Remove 'show' class
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(aboutSection);
});
