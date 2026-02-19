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
        // Make sure 'db' is already defined in port.html before this script runs
        await db.collection("messages").add({
            name: name,
            email: email,
            message: message,
            timestamp: new Date()
        });

        kotlin
        Copy
        Edit
        button.textContent = "Message Sent!";
        this.reset();
    } catch (error) {
        console.error("Error sending message:", error);
        button.textContent = "Send Failed";
    }

    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 3000);
});

💡
Tip: You can also display a success message below the form by adding:

    <
    p id = "status-message" > < /p>
And using:

    document.getElementById("status-message").innerText = "✅ Sent!";