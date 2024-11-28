document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");

    // Observer to trigger animations on scroll
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    footer.classList.add("visible"); // Trigger animation
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the footer is visible
    );

    observer.observe(footer);
});
