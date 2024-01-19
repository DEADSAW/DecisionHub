document.addEventListener('DOMContentLoaded', function () {
    // Initialize elements and event listeners
    const addAttributeButton = document.getElementById('add-attribute');
    const ruleBlock = document.getElementById('rule-block');
    const createRuleButton = document.getElementById('create-rule');
    let attributeCount = 0;

    // Add attribute functionality
    addAttributeButton.addEventListener('click', function () {
        attributeCount++;
        const attributeDiv = document.createElement('div');
        attributeDiv.innerHTML = `
            Attribute ${attributeCount}:
            <select id="attribute-${attributeCount}">
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
            <button id="delete-attribute-${attributeCount}">Delete Attribute</button>
        `;

        ruleBlock.appendChild(attributeDiv);

        // Add delete button functionality
        const deleteButton = document.getElementById(`delete-attribute-${attributeCount}`);
        deleteButton.addEventListener('click', function () {
            attributeDiv.remove();
            attributeCount--;
        });

        // Add condition functionality
        const addConditionButton = document.getElementById(`add-condition-${attributeCount}`);
        addConditionButton.addEventListener('click', function () {
            const conditionCount = attributeDiv.querySelectorAll('.condition').length + 1;
            const conditionDiv = document.createElement('div');
            conditionDiv.classList.add('condition');
            conditionDiv.innerHTML = `
                Condition ${conditionCount}:
                <select id="operator-${attributeCount}-${conditionCount}">
                    <option value="==">equal to (==)</option>
                    <option value="!=">not equal to (!=)</option>
                    <option value=">">greater than (>)</option>
                    <option value="<">less than (<)</option>
                    <option value=">=">greater than or equal to (>=)</option>
                    <option value="<=">less than or equal to (<=)</option>
                </select>
                <input type="text" id="condition-${attributeCount}-${conditionCount}" placeholder="Condition Value">
                <input type="text" id="action-${attributeCount}-${conditionCount}" placeholder="what action it Performs">
                <button id="add-nested-condition-${attributeCount}-${conditionCount}">Add Nested Condition</button> <!-- Add nested condition button -->
                <button id="delete-condition-${attributeCount}-${conditionCount}">Delete Condition</button>
            `;

            attributeDiv.appendChild(conditionDiv);

            // Add delete condition button functionality
            const deleteConditionButton = document.getElementById(`delete-condition-${attributeCount}-${conditionCount}`);
            deleteConditionButton.addEventListener('click', function () {
                conditionDiv.remove();
            });

            // Add nested condition button functionality
            const addNestedConditionButton = document.getElementById(`add-nested-condition-${attributeCount}-${conditionCount}`);
            addNestedConditionButton.addEventListener('click', function () {
                const nestedConditionCount = conditionDiv.querySelectorAll('.nested-condition').length + 1;
                const nestedConditionDiv = document.createElement('div');
                nestedConditionDiv.classList.add('nested-condition');
                nestedConditionDiv.innerHTML = `
                    Nested Condition ${nestedConditionCount}:
                    <select id="nested-operator-${attributeCount}-${conditionCount}-${nestedConditionCount}">
                        <option value="&&">and (&&)</option>
                        <option value="OR">or (||)</option>
                        <option value="NOT">or (!)</option>
                        <option value="IN">or (in)</option>
                        <option value="NOT IN">or (not in)</option>
                    </select>
                    <select id="nested-attribute-${attributeCount}-${conditionCount}-${nestedConditionCount}">
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
                    <select id="nested-operator-${attributeCount}-${conditionCount}-${nestedConditionCount}">
                        <option value="==">equal to (==)</option>
                        <option value="!=">not equal to (!=)</option>
                        <option value=">">greater than (>)</option>
                        <option value="<">less than (<)</option>
                        <option value=">=">greater than or equal to (>=)</option>
                        <option value="<=">less than or equal to (<=)</option>
                    </select>
                    <input type="text" id="nested-condition-${attributeCount}-${conditionCount}-${nestedConditionCount}" placeholder="Condition Value">
                    <button id="delete-nested-condition-${attributeCount}-${conditionCount}-${nestedConditionCount}">Delete Nested Condition</button>
                `;

                conditionDiv.appendChild(nestedConditionDiv);

                // Add delete nested condition button functionality
                const deleteNestedConditionButton = document.getElementById(`delete-nested-condition-${attributeCount}-${conditionCount}-${nestedConditionCount}`);
                deleteNestedConditionButton.addEventListener('click', function () {
                    nestedConditionDiv.remove();
                });
            });
        });
    });
   
    
    // Add create rule button functionality
    createRuleButton.addEventListener('click', function () {
        // Send a request to the server to save the rule data in the database
        fetch('/api/rules', {
            method: 'POST',
            body: JSON.stringify({
                attributes: Array.from(ruleBlock.querySelectorAll('select[id^="attribute"]')).map(el => el.value),
                conditions: Array.from(ruleBlock.querySelectorAll('.condition')).map(conditionDiv => {
                    return {
                        operator: conditionDiv.querySelector('select[id^="operator"]').value,
                        value: conditionDiv.querySelector('input[id^="condition"]').value,
                        action: conditionDiv.querySelector('input[id^="action"]').value,
                        nestedConditions: Array.from(conditionDiv.querySelectorAll('.nested-condition')).map(nestedConditionDiv => {
                            return {
                                operator: nestedConditionDiv.querySelector('select[id^="nested-operator"]').value,
                                attribute: nestedConditionDiv.querySelector('select[id^="nested-attribute"]').value,
                                operator2: nestedConditionDiv.querySelector('select[id^="nested-operator"]').value,
                                value: nestedConditionDiv.querySelector('input[id^="nested-condition"]').value
                            };
                        })
                    };
                })
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Display the rule in the "Under your rules" section
            const ruleList = document.getElementById('rule-list');
            const ruleItem = document.createElement('li');
            ruleItem.textContent = data.name;
            ruleList.appendChild(ruleItem);
        });
    });
});