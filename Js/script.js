document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("deborahPopup").style.display = "block";
    }, 3000); // Show popup after 3 seconds
});

function closePopup() {
    document.getElementById("deborahPopup").style.display = "none";
    document.getElementById("popupNotification").style.display = "block"; // Show floating notification
}

function openPopup() {
    document.getElementById("deborahPopup").style.display = "block";
    document.getElementById("popupNotification").style.display = "none"; // Hide notification when popup is opened
}
