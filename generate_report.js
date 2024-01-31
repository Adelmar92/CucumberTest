const reporter = require('cucumber-html-reporter')
const context = require('./common/context/context')

context.startEnviroment()

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json', // Path to your JSON output
  output: 'reports/cucumber_report.html', // Path for the generated HTML report
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    // Metadata about the run
    'App Version': '1.0.0',
    'Test Environment': context.context.environment,
    'Base URL': context.context.baseUrl
    // Add more metadata as required
  }
}

reporter.generate(options)
