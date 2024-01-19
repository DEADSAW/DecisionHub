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
