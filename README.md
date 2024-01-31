<h1 align="center">
  ADS Cucumber test Testing
</h1>
<p align="center">
  <b>Automated tests in plain language, for Node.js</b>
</p>

## Technologies Used

[Cucumber](https://cucumber.io/docs/installation/javascript/)

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```bash
npm install
```

## Running Tests
To run the Cucumber tests, use the following command:

```bash
npm test
```

## Feature Files

Feature files are located in the features directory (.feature). These files use the Gherkin syntax to define the behavior of the application. Each feature file contains a high-level description of a single feature, along with one or more scenarios that outline the expected behavior.

## Structure of a Feature File

```gherkin
Feature: Title of the feature

  Scenario: Title of the scenario
    Given some initial context
    When an event occurs
    Then ensure some outcomes
```

## Glue Code

Glue code is the bridge between the feature files and the actual implementation. These are JavaScript files that define the steps mentioned in the feature files. Glue code files are located in the step_definitions folder.

## Example of Glue Code

```gherkin
const { Given, When, Then } = require('@cucumber/cucumber');

Given('some initial context', function () {
  // Implementation code
});

When('an event occurs', function () {
  // Implementation code
});

Then('ensure some outcomes', function () {
  // Implementation code
});
```

This command will execute all the scenarios defined in your feature files against the corresponding glue code.

