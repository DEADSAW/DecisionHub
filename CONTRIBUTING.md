# Contributing to DecisionHub

Thank you for your interest in contributing to DecisionHub! This document provides guidelines and steps for contributing.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue on GitHub with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots if applicable
- Your environment details (OS, Python version, browser)

### Suggesting Features

We welcome feature suggestions! Please open an issue with:
- A clear description of the feature
- Use cases and benefits
- Any implementation ideas you have

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/DecisionHub.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation as needed

4. **Commit your changes**
   ```bash
   git commit -m "Add: brief description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues

## Development Setup

### Prerequisites
- Python 3.8+
- pip

### Installation
```bash
# Clone the repository
git clone https://github.com/DEADSAW/DecisionHub.git
cd DecisionHub

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### Running the Application
```bash
python app.py
```
The application will be available at `http://localhost:5000`

## Code Style Guidelines

### Python
- Follow PEP 8 style guidelines
- Use meaningful variable and function names
- Add docstrings to functions and classes
- Keep functions focused and concise

### HTML/CSS/JavaScript
- Use consistent indentation (2 or 4 spaces)
- Use semantic HTML elements
- Keep CSS organized and modular
- Comment complex JavaScript logic

## Testing

Before submitting a PR, ensure:
- The application runs without errors
- All existing functionality still works
- Your new feature works as expected

## Questions?

Feel free to open an issue if you have any questions or need clarification on anything.

Thank you for contributing! 🎉
