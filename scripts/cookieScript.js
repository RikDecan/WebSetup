

document.addEventListener("DOMContentLoaded", function() {
    // Check if user has previously accepted cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        // Show cookie banner
        document.getElementById("cookie-banner").style.display = "block";
    }

    // Event listener for accepting all cookies
    document.getElementById("accept-all-cookies-btn").addEventListener("click", function() {
        // Hide cookie banner
        document.getElementById("cookie-banner").style.display = "none";
        // Set flag in localStorage to remember user's consent
        localStorage.setItem("cookiesAccepted", true);
    });

    // Event listener for accepting essential cookies only
    document.getElementById("accept-essential-cookies-btn").addEventListener("click", function() {
        // Hide cookie banner
        document.getElementById("cookie-banner").style.display = "none";
        // Set flag in localStorage to remember user's consent for essential cookies
        localStorage.setItem("essentialCookiesAccepted", true);
    });

    // Check if user has previously accepted only essential cookies
    if (!localStorage.getItem("cookiesAccepted") && localStorage.getItem("essentialCookiesAccepted")) {
        // Load essential cookies or perform other actions for essential cookies
        // For example, load essential scripts or functionalities
    }
});

