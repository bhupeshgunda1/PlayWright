import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  //testMatch: ["tests/basicinteractiontests.ts"],

  testDir: './tests',
  /* Run tests in files in parallel */
  
  retries:0,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["dot"],["json",{outputFile: 'jsonReports/jsonReport.json'}],["html", { open: 'never' }]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: true,
    screenshot: "on",
    video: "on",
  },
 
  /* Configure projects for major browsers */
  projects: [
  {
      name: 'Chrome',
      use: {...devices['Desktop Chrome'] },
  }, 

    /* Test against mobile viewports. */
     //{
       //name: 'Mobile Chrome',
      // use: { ...devices['Pixel 5'] },
     //}
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
