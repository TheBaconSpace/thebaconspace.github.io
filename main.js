document.addEventListener("DOMContentLoaded", function () {
    // Fetch the social links from the JSON file
    fetch("social_links.json")
        .then((response) => response.json())
        .then((data) => {
            const socialLinksSection = document.getElementById("social-links");

            // Generate HTML for each social link
            data.socialLinks.forEach((link) => {
                const socialLink = document.createElement("a");
                socialLink.href = link.url;
                socialLink.target = "_blank"; // Open links in a new tab
                socialLink.innerHTML = `<i class="${link.icon}"></i> ${link.name}`;

                socialLinksSection.appendChild(socialLink);
            });
        })
        .catch((error) => {
            console.error("Error loading social links:", error);
        });
});
