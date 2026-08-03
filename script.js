// ===========================
// RAMU ORBIT JavaScript
// ===========================

// Open Menu
function openMenu() {
    document.getElementById("menu").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

// Close Menu
function closeMenu() {
    document.getElementById("menu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

// Close menu when ESC is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeMenu();
    }
});

// ===========================
// Live Clock
// ===========================

function updateClock() {

    const now = new Date();

    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    document.getElementById("clock").innerHTML =
        now.toLocaleString("en-US", options);

}

updateClock();
setInterval(updateClock, 1000);

// ===========================
// Weather / Location
// ===========================

const weatherText = document.getElementById("weatherText");

if (navigator.geolocation) {

    weatherText.innerHTML = "📍 Detecting your location...";

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const lat = position.coords.latitude.toFixed(5);
            const lon = position.coords.longitude.toFixed(5);

            weatherText.innerHTML =
            `
            📍 Latitude : ${lat}<br>
            🌍 Longitude : ${lon}<br><br>
            ✅ Location detected successfully
            `;

        },

        function(error) {

            switch(error.code){

                case error.PERMISSION_DENIED:
                    weatherText.innerHTML="❌ Location permission denied.";
                    break;

                case error.POSITION_UNAVAILABLE:
                    weatherText.innerHTML="⚠️ Location unavailable.";
                    break;

                case error.TIMEOUT:
                    weatherText.innerHTML="⌛ Location request timed out.";
                    break;

                default:
                    weatherText.innerHTML="❌ Unknown error.";
            }

        }

    );

}else{

    weatherText.innerHTML="❌ Geolocation is not supported by this browser.";

}

// ===========================
// Welcome Message
// ===========================

window.onload = function(){

    console.log("🚀 RAMU ORBIT Loaded Successfully");

};