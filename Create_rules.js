document.addEventListener('DOMContentLoaded', function() {
    // Initialize elements and event listeners
    const addAttributeButton = document.getElementById('add-attribute');
    const ruleBlock = document.getElementById('rule-block');
    const createRuleButton = document.getElementById('create-rule');
    let attributeCount = 0;

    // Add attribute functionality
    addAttributeButton.addEventListener('click', function() {
        attributeCount++;
        const attributeDiv = document.createElement('div');
        attributeDiv.innerHTML = `
            Attribute ${attributeCount}:
            <select id="attributeCount">
                    <option value="Annual Income">Annual Income</option>
                    <option value="Married">Married</option>
                    <option value="Dependents">Dependents</option>
                    <option value="Age">Age</option>
                    <option value="Credit score">Credit score</option>
                    <option value="Education">Education</option>
                    <option value="Self_Employed">Self_Employed</option>
                    <option value="ApplicantIncome">ApplicantIncome</option>
                    <option value="CoapplicantIncome">CoapplicantIncome</option>
                    <option value="LoanAmount">LoanAmount</option>
                    <option value="DebtToIncomeRatio">DebtToIncomeRatio</option>

                    </select>
            <button id="add-condition-${attributeCount}">Add Condition</button>
        `;

        ruleBlock.appendChild(attributeDiv);
    });

    // Add condition functionality
    ruleBlock.addEventListener('click', function(event) {
        const target = event.target;
        if (target.id.startsWith('add-condition-')) {
            const attributeId = target.id.split('-')[2];
            const conditionCount = target.parentElement.querySelectorAll('.condition').length + 1;
            const conditionDiv = document.createElement('div');
            conditionDiv.classList.add('condition');
            conditionDiv.innerHTML = `
                Condition ${conditionCount}:
                <select id="operator-${attributeId}-${conditionCount}">
                    <option value="==">equal to (==)</option>
                    <option value="!=">not equal to (!=)</option>
                    <option value=">">greater than (>)</option>
                    <option value="<">less than (<)</option>
                    <option value=">=">greater than or equal to (>=)</option>
                    <option value="<=">less than or equal to (<=)</option>

                    </select>
                <input type="text" id="value-${attributeId}-${conditionCount}">
            `;
            target.parentElement.appendChild(conditionDiv);
        }
    });

    // Create rule functionality (implement validation and rule storage)
    createRuleButton.addEventListener('click', function() {
        // Get rule data from the form
        // Validate rule structure and conditions
        // Store or process the rule
    });
});
