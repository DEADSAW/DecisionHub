function goBack() {
    // You can implement redirection logic to navigate back to the previous page
    console.log("Back to 1_3_select");
    window.location.href = 'index_1_3_select.html'; // Adjust the redirection URL as needed
}

// Example logic to check rules and display result message
document.addEventListener('DOMContentLoaded', function () {
    checkRulesAndDisplayResult();
});

function checkRulesAndDisplayResult() {
    // Simulated example: Rules selected from the previous page
    const selectedRules = ["rule_1", "rule_2", "rule_3"];

    // Simulated example: Rules that passed
    const passedRules = ["rule_1", "rule_3"];

    // Check if all selected rules passed
    const allRulesPassed = selectedRules.every(rule => passedRules.includes(rule));

    // Display result message
    const resultMessageContainer = document.getElementById('resultMessage');
    if (allRulesPassed) {
        resultMessageContainer.innerHTML = '<p>No errors. Strategy passed.</p>';
    } else {
        const failedRule = selectedRules.find(rule => !passedRules.includes(rule));
        resultMessageContainer.innerHTML = `<p>Strategy failed. Error in ${failedRule}.</p>`;
    }
}
