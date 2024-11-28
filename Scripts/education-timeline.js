document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");

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

    // Observe each timeline item
    timelineItems.forEach((item) => observer.observe(item));
});
