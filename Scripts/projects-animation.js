document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");

    // Observer for project cards
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add 'show' class when visible
                } else {
                    entry.target.classList.remove("show"); // Remove 'show' class when out of view
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the item is visible
    );

    projectCards.forEach((card) => observer.observe(card));
});
