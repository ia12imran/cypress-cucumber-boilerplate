const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

  // // Variables to hold start and end times
  // let startTime;
  // let endTime;

  // // Capture the start time before the run begins
  // on('before:run', () => {
  //   startTime = new Date().toLocaleString();
  //   console.log(`Test run started at: ${startTime}`);
  // });

  // // Capture the end time after the run completes
  // on('after:run', () => {
  //   endTime = new Date().toLocaleString();
  //   console.log(`Test run ended at: ${endTime}`);

  //   // Add start and end times to the environment variables for Allure reports
  //   config.env.allureEnvironment = {
  //     ...config.env.allureEnvironment,
  //     "Test Start Time": startTime,
  //     "Test End Time": endTime,
  //   };

  //   // Return the updated config
  //   return config;
  // });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: 'nwkijd',
  // reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 2,  // Number of retries in `cypress run`
    openMode: 1, // Number of retries in `cypress open`
  },
  e2e: {
    setupNodeEvents,
    // setupNodeEvents(on, config) {
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },
  viewportWidth: 1920, // Set the width as per your requirement
  viewportHeight: 1080, // Set the height as per your requirement
});
