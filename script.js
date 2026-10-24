
document.addEventListener("DOMContentLoaded", function () {

    // Mobile Navbar
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });

    // Current year in footer
    document.getElementById("year").textContent =
        new Date().getFullYear();

    // WhatsApp Order Buttons
    // Replace this number with your own WhatsApp number.
    // Use country code without + or spaces.
    const whatsappNumber = "923001234567";

    document.querySelectorAll(".order-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            const itemName = button.dataset.item;

            const message =
                `Hello Royal Bites! I want to order: ${itemName}. ` +
                `Please confirm availability and delivery details.`;

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=` +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank", "noopener,noreferrer");
        });
    });

    // Contact Form
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const customerName =
            document.getElementById("customerName").value.trim();

        const customerEmail =
            document.getElementById("customerEmail").value.trim();

        const customerMessage =
            document.getElementById("customerMessage").value.trim();

        if (!customerName || !customerEmail || !customerMessage) {
            formMessage.style.color = "#c93416";
            formMessage.textContent =
                "Please fill in all fields.";
            return;
        }

        formMessage.style.color = "#287a3c";
        formMessage.textContent =
            "Thank you, " + customerName +
            "! Your form is valid. Please contact us on WhatsApp to send your message.";

        // This demo form does not send or save messages to a server.
    });

});
