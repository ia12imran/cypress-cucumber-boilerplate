const report = require("multiple-cucumber-html-reporter");
const fs = require('fs');

// Capture the current date and time when the script starts
const startTime = new Date().toLocaleString();

let endTime;

// After all tests are run, capture the end time
// Assuming this script runs after your Cypress tests
process.on('exit', () => {
  endTime = new Date().toLocaleString();

  // Generate the report with dynamic start and end times
  report.generate({
    jsonDir: "jsonlogs", // Path to the directory containing the .json files
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
      browser: {
        name: "chrome",
        version: "127"
      },
      device: "Ubuntu",
      platform: {
        name: "Ubuntu",
        version: "20.04.6 LTS",
      }
    },
    customData: {
      title: "Run info",
      data: [
        { label: "Project", value: "Careers360 IDP" },
        { label: "Release", value: "2.0" },
        { label: "Cycle", value: "B11221.34321" },
        { label: "Execution Start Time", value: startTime },
        { label: "Execution End Time", value: endTime },
      ],
    },
  });
});