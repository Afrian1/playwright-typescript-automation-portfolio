
import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly buttonLogout: Locator;
  readonly popupCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonLogout = page.getByRole('link', {
      name: 'Logout',
    });
    this.popupCloseButton = page.getByRole('button', {
      name: 'OK',
    });
  }

  async openHomePage(): Promise<void> {
    await this.page.goto('/secure');
  }

  async logout(): Promise<void> {
    await this.buttonLogout.click();
  }

  async handleIntermittentPopup(): Promise<void> {
    try {
      await this.popupCloseButton.waitFor({
        state: 'visible',
        timeout: 3000,
      });
    } catch (error) {
      if (
        error instanceof Error &&
        error.name === 'TimeoutError'
      ) {
        return;
      }

      throw error;
    }

    await this.popupCloseButton.click();
  }
}
