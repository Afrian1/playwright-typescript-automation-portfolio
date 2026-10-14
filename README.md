# Playwright TypeScript Automation Portfolio

## About This Project

This project is a UI test automation portfolio built using **Playwright and TypeScript**. It demonstrates my skills in designing, developing, and executing automated test scenarios for web applications.

The project focuses on positive testing, negative testing, login validation, logout functionality, and data-driven testing.

## Tech Stack

- **Playwright** — Web UI test automation
- **TypeScript** — Programming language
- **Node.js & npm** — Runtime and package management
- **Git & GitHub** — Version control and project hosting
- **Page Object Model (POM)** — Test code organization
- **Playwright HTML Report** — Test execution reporting

## Project Structure

```text
playwright-vscode-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── baseFixture.ts
├── pages/
│   ├── home.page.ts
│   └── login.page.ts
├── tests/
│   └── login.spec.ts
├── utils/
│   └── testData.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Test Scenarios

| Test ID | Scenario | Type |
|---|---|---|
| LOGIN-001 | Login with valid credentials | Positive |
| LOGOUT-002 | Logout successfully | Functional |
| LOGIN-003 | Login with invalid credentials | Negative |
| LOGIN-004 | Login with an invalid username | Negative |
| LOGIN-005 | Login with an invalid password | Negative |

*Note: Actual test data and expected results are defined in `utils/testData.ts`.*

## Key Features

- Page Object Model for maintainable and reusable test code
- Custom Playwright fixtures
- Reusable page objects and locators
- Data-driven negative testing
- Test steps using `test.step()`
- Assertions for URL navigation and validation messages
- Automated test execution and reporting

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git
- Visual Studio Code (recommended)

### Installation

Clone the repository:

```bash
git clone https://github.com/Afrian1/playwright-typescript-automation-portfolio.git
```

Navigate to the project directory:

```bash
cd playwright-typescript-automation-portfolio
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run tests with a visible browser:

```bash
npx playwright test --headed
```

Run tests with a specific test ID or title:

```bash
npx playwright test -g "LOGIN-001"
```

## Test Reports

Generate and open the Playwright HTML report:

```bash
npx playwright show-report
```

The report provides test results and, depending on the configuration, execution details, screenshots, and videos for failed tests.

## Design Approach

This project follows the Page Object Model (POM) to separate page interactions from test scenarios.

- `pages/` — Contains page objects, locators, and reusable actions.
- `fixtures/` — Provides reusable test setup and page objects.
- `tests/` — Contains test cases and assertions.
- `utils/` — Stores reusable test data.
- `playwright.config.ts` — Defines Playwright test execution settings.

## Future Improvements

- Expand test coverage for additional web application features
- Add API testing
- Improve test data management
- Integrate automated execution with GitHub Actions
- Improve test reporting and failure analysis

## Author

**Afrian Ramadhan**

QA Automation Engineer | Software Testing

Skills: Manual Testing, Automation Testing, Playwright, TypeScript, SIT, UAT, Regression Testing, and Defect Management.

---

*This repository is part of my QA Automation portfolio and demonstrates my ongoing practice in building maintainable automated tests.*
