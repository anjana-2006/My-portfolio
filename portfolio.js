document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const button = this.querySelector("button");
    const originalText = button.textContent;

    button.textContent = "Sending...";
    button.disabled = true;

    try {
        await db.collection("messages").add({
            name: name,
            email: email,
            message: message,
            timestamp: new Date()
        });

        button.textContent = "Message Sent!";
        this.reset();
        document.getElementById("status-message").innerText = "✅ Sent!";
    } catch (error) {
        console.error("Error sending message:", error);
        button.textContent = "Send Failed";
        document.getElementById("status-message").innerText = "❌ Error: " + error.message;
    }

    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 3000);
});