function goBack() {
    // You can implement redirection logic to navigate back to the previous page
    console.log("Back to 1_3_home");
    window.location.href = 'index_1_3_home.html'; // Adjust the redirection URL as needed
}

function saveAndProceed() {
    // You can implement logic for saving and proceeding
    console.log("Saving and proceeding");

    // Redirect to 1_3_select page
    window.location.href = 'index_1_3_select.html';
}

function addRuleDropdown() {
    // Create a new rule dropdown and append it to the rule-container
    const ruleContainer = document.querySelector('.rule-container');
    
    const newRuleDropdown = document.createElement('div');
    newRuleDropdown.classList.add('rule-dropdown');

    const newRuleSelect = document.createElement('select');
    newRuleSelect.classList.add('ruleSelect');
    newRuleSelect.innerHTML = document.querySelector('.ruleSelect').innerHTML; // Clone options

    const newAddRuleButton = document.createElement('button');
    newAddRuleButton.classList.add('addRuleButton');
    newAddRuleButton.textContent = '+';
    newAddRuleButton.onclick = addRuleDropdown;

    newRuleDropdown.appendChild(newRuleSelect);
    newRuleDropdown.appendChild(newAddRuleButton);

    ruleContainer.appendChild(newRuleDropdown);
}
