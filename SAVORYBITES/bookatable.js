document.addEventListener("DOMContentLoaded", function () { 
    const submitButton = document.getElementById("Submit");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent actual form submission
        showNotification("Table Booked !!!!");
    });
    
    });
    
    function showNotification(message) { 
        const notification = document.createElement("div"); 
        notification.innerText = message; 
        notification.style.position = "fixed"; 
        notification.style.top = "20px"; 
        notification.style.right = "20px"; 
        notification.style.background = "#4CAF50"; 
        notification.style.color = "white"; 
        notification.style.padding = "10px 20px"; 
        notification.style.borderRadius = "5px"; 
        notification.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"; 
        notification.style.zIndex = "1000";
    
        document.body.appendChild(notification);
    
        setTimeout(() => {
        notification.remove();
        }, 3000); // Remove notification after 3 seconds
    }

  
    