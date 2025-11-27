document.getElementById('backButton').addEventListener('click', function() {
    // Add functionality for the back button
    console.log('Back button clicked!');
    // You can add code to navigate back or perform any other desired action
});

document.getElementById('debugButton').addEventListener('click', function() {
    // Add functionality for the debug button
    console.log('Debug button clicked!');
    // You can add code to initiate debugging or perform any other desired action
});

document.getElementById('submitAutomatedTesting').addEventListener('click', function() {
    // Add functionality for submitting automated testing
    const databaseLink = document.getElementById('uploadDatabaseLink').value;
    console.log('Automated Testing submitted with database link:', databaseLink);
    // You can add code to process the submitted data
});
function goBack() {
    // You can implement redirection logic to navigate back to the previous page
    console.log("Back to Debug_1.1 page");
    window.location.href = 'Debug_1.1.html'; // Adjust the redirection URL as needed
}
function debug() {
    // Redirect to 1_3_debug page
    window.location.href = 'Debug_1.3.html'; // Adjust the redirection URL as needed
}