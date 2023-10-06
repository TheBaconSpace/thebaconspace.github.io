document.addEventListener("DOMContentLoaded", function () {
    // Fetch the social links from the JSON file
    fetch("https://thebaconspace.github.io/social_links.json")
        .then((response) => response.json())
        .then((data) => {
            const socialLinksSection = document.getElementById("social-links");

            // Generate buttons for each social link
            data.socialLinks.forEach((link) => {
                const socialButton = document.createElement("a");
                socialButton.href = link.url;
                socialButton.target = "_blank";
                socialButton.className = "btn btn-primary mr-2 mb-2";
                socialButton.innerHTML = `<i class="${link.icon}"></i> ${link.name}`;

                socialLinksSection.appendChild(socialButton);
            });
        })
        .catch((error) => {
            console.error("Error loading social links:", error);
        });
});
