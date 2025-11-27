import pandas as pd
import random
import string

# Function to generate random data for the sheet
def generate_realistic_data(num_people):
    data = {
        'User ID': [''.join(random.choices(string.ascii_letters + string.digits, k=8)) for _ in range(num_people)],
        'Name': [''.join(random.choice(string.ascii_uppercase) + random.choice(string.ascii_lowercase) for _ in range(random.randint(5, 10))) for _ in range(num_people)],
        'Age': [random.randint(15, 90) for _ in range(num_people)],
        'Income (INR)': [random.randint(30000, 1500000) for _ in range(num_people)],
        'Credit Score': [random.randint(300, 850) for _ in range(num_people)],
        'Debt-to-Income Ratio': [round(random.uniform(10, 40), 2) for _ in range(num_people)],
        'Has Dependents': [random.choice(['Yes', 'No']) for _ in range(num_people)],
        'Loan Amount (INR)': [random.randint(50000, 1000000) for _ in range(num_people)],
        'Gender': [random.choice(['Male', 'Female']) for _ in range(num_people)],
        'Self Employed': [random.choice(['Yes', 'No']) for _ in range(num_people)],
        'Education': [random.choice(['Yes', 'No']) for _ in range(num_people)],
        'Married': [random.choice(['Yes', 'No']) for _ in range(num_people)],
        'Collateral': [random.choice(['Yes', 'No']) for _ in range(num_people)],
        'Tenure (Months)': [random.randint(6, 120) for _ in range(num_people)],
        'Co-Applicant': [random.choice(['Yes', 'No']) for _ in range(num_people)]
    }
    return data

# Generate data for 200 people
num_people = 200
data = generate_realistic_data(num_people)

# Create a DataFrame
df = pd.DataFrame(data)

# Save DataFrame to a CSV file with a different name
df.to_csv('custom_loan_data.csv', index=False)

print("CSV file generated successfully.")

