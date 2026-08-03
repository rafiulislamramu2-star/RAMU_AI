// Sidebar Menu
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

// Live Clock
function updateClock() {
    const now = new Date();

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString("en-US", options);
}

setInterval(updateClock, 1000);
updateClock();

// Weather (Location)
const weatherText = document.getElementById("weatherText");

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const lat = position.coords.latitude.toFixed(4);
            const lon = position.coords.longitude.toFixed(4);

            weatherText.innerHTML =
                "📍 Latitude: " + lat +
                "<br>🌍 Longitude: " + lon;

        },

        function() {
            weatherText.innerHTML =
                "❌ Location Permission Denied";
        }

    );

} else {

    weatherText.innerHTML =
        "Geolocation is not supported.";

}