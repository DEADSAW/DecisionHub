function openLogin() {
    document.getElementById("loginPopup").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

function redirectTo(page) {
    // You can implement redirection logic based on the selected page (create, modify, debug, deploy)
    console.log("Redirect to: " + page);
}
