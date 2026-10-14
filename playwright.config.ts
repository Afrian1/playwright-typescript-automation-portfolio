import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'https://the-internet.herokuapp.com';


export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'results.xml' }]
  ],

  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // scalable tinggal uncomment
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});