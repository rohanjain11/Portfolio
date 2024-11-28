document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.querySelector(".contact-section");

    if (!contactSection) {
        console.error("Contact section not found!");
        return;
    }

    // Intersection Observer for animation
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("Contact section in view");
                    contactSection.classList.add("visible"); // Add 'visible' class
                } else {
                    console.log("Contact section out of view");
                    contactSection.classList.remove("visible"); // Remove 'visible' class
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    observer.observe(contactSection);
});
