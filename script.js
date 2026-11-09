// NexTec Commtech Models

// Replace this with your Discord profile or support server invite.
const discordLink = "YOUR_DISCORD_LINK_HERE";

document.getElementById("discordButton").addEventListener("click", function(event) {
    event.preventDefault();

    if (discordLink === "YOUR_DISCORD_LINK_HERE") {
        alert("Discord contact link has not been configured yet.");
        return;
    }

    window.open(discordLink, "_blank");
});