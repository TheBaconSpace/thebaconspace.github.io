document.addEventListener("DOMContentLoaded", function () {
    // Fetch the social links from the JSON file
    fetch("social_links.json")
        .then((response) => response.json())
        .then((data) => {
            const socialLinksSection = document.getElementById("social-links");

            // Generate button-links for each social link
            data.socialLinks.forEach((link) => {
                const socialButton = document.createElement("a");
                socialButton.href = link.url;
                socialButton.target = "_blank";
                socialButton.className = "btn btn-primary mr-2 mb-2";
                socialButton.innerHTML = `${link.name} <i class="${link.icon}"></i>`;

                socialLinksSection.appendChild(socialButton);
            });
        })
        .catch((error) => {
            console.error("Error loading social links:", error);
        });
});
