# QA Automation Assignment

## Application Under Test
https://www.saucedemo.com/

---

# Tech Stack

- Playwright
- TypeScript
- Page Object Model (POM)
- Allure Reporting

---

# Framework Features

- Page Object Model (POM) implementation
- Parallel test execution
- Stable Playwright locators
- Environment-based configuration
- Smoke and Regression tagging
- Data-driven test configuration
- Allure reporting integration
- Reusable and modular framework structure
- Screenshot, video, and trace capture on failure

---

# Project Structure

```bash
Pages/
tests/
test-data/
utils/
.github/

playwright.config.ts
package.json
README.md
.env.example
```

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/uppi20/Playwright-Framework.git
```

## Navigate to Project

```bash
cd Playwright-Framework
```

## Install Dependencies

```bash
npm install
```

---

# Run Test Suite

## Run All Tests

```bash
npx playwright test
```

## Run Smoke Tests

```bash
npx playwright test --grep @smoke
```

## Run Regression Tests

```bash
npx playwright test --grep @regression
```

---

# Allure Reporting

## Generate Allure Results

```bash
npx playwright test
```

## Open Allure Report

```bash
npx allure serve allure-results
```

---

# Design Decisions

- Implemented Page Object Model for better maintainability and reusability
- Used Playwright built-in locators for stable automation
- Separated test data from test logic using environment variables
- Added Smoke and Regression tags for test grouping
- Implemented reusable page methods and assertions
- Enabled parallel execution for faster execution
- Integrated Allure reporting for better reporting and debugging

---

# Assumptions

- SauceDemo standard test users are used for testing
- Tests are designed for desktop browser execution
- Internet connection is required to access SauceDemo application

---

# Test Coverage

## Login Functionality

- Valid Login
- Invalid Password
- Locked User
- Empty Username
- Empty Password

## Add To Cart Functionality

- Add single product to cart
- Add multiple products to cart
- Validate cart badge count
- Validate cart product details
- Remove product from cart

---

# Environment Variables

Create `.env` file using `.env.example`

Example:

```env
BASE_URL=https://www.saucedemo.com/
STANDARD_USER=standard_user
LOCKED_USER=locked_out_user
PASSWORD=secret_sauce
INVALID_PASSWORD=wrong_password
```