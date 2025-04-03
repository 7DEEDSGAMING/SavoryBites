document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animated Mobile Menu Toggle
    const navToggle = document.createElement("div");
    navToggle.innerHTML = "☰";
    navToggle.style.fontSize = "24px";
    navToggle.style.cursor = "pointer";
    navToggle.style.display = "none";
    document.querySelector("header").appendChild(navToggle);
    
    const nav = document.querySelector("nav ul");
    navToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
    
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 768) {
            navToggle.style.display = "block";
            nav.style.display = "none";
        } else {
            navToggle.style.display = "none";
            nav.style.display = "flex";
        }
    });

    // Button Click Animation
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.add("clicked");
            setTimeout(() => {
                this.classList.remove("clicked");
            }, 300);
        });
    });
    
    // Form Submission Confirmation Pop-up
    const submitButton = document.querySelector(".book-table");
    if (submitButton) {
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();
            showNotification("Table Booking Request Sent!");
        });
    }
});

function showNotification(message) {
    const notification = document.createElement("div");
    notification.innerText = message;
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.background = "#e63946";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    notification.style.zIndex = "1000";
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
