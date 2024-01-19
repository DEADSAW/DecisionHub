document.getElementById('backButton').addEventListener('click', function() {
    // Add functionality for the back button
    console.log('Back button clicked!');
});

document.getElementById('customDatabaseButton').addEventListener('click', function() {
    // Add functionality for custom database button
    console.log('Custom Database button clicked!');
});

document.getElementById('inputDataButton').addEventListener('click', function() {
    // Add functionality for input data button
    console.log('Input Data button clicked!');
});

document.getElementById('proceedButton').addEventListener('click', function() {
    // Add functionality for proceed button
    console.log('Proceed to Deployment Stage button clicked!');
});
function inputd() {
    // Redirect to 1_3_select page
    window.location.href = 'Debug_1.1.html'; // Adjust the redirection URL as needed
    console.log("Navigating to 1_3_select page");
}

function customd() {
    // Redirect to 1_3_create page
    window.location.href = 'Debug_1.2.html'; // Adjust the redirection URL as needed
    console.log("Navigating to 1_3_create page");
}
