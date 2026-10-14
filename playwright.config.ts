
import { defineConfig, devices } from '@playwright/test';

const baseURL =
  process.env.BASE_URL || 'https://the-internet.herokuapp.com';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  // Jalankan satu test pada satu waktu untuk troubleshooting
  workers: 1,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'results.xml' }],
  ],

  timeout: 60000,

  use: {
    baseURL,
    screenshot: 'only-on-failure',
    trace: 'on',
    video: 'retain-on-failure',
    headless: true,
    navigationTimeout: 60000,
    actionTimeout: 15000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
