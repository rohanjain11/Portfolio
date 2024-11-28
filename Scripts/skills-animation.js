document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll(".skill-card");

    // Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add 'show' class
                } else {
                    entry.target.classList.remove("show"); // Remove 'show' class when out of view
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the item is visible
    );

    skillCards.forEach((card) => observer.observe(card));
});
