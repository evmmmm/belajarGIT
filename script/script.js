// Update waktu setiap detik
function updateTime() {
    const timeElement = document.getElementById("current-time");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    timeElement.textContent = formattedTime;
}
setInterval(updateTime, 1000);
window.onload = updateTime;

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}