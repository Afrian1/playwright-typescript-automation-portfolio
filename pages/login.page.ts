
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly buttonLogin: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.buttonLogin = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('#flash');
    this.successMessage = page.getByText(
      'You logged into a secure area!'
    );
  }

  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

 async login(username: string, password: string): Promise<void> {
  await this.usernameInput.fill(username);
  await this.passwordInput.fill(password);

  await Promise.all([
    this.page.waitForURL(/\/secure|\/login/, {
      timeout: 30000,
    }),
    this.buttonLogin.click(),
  ]);
}

}