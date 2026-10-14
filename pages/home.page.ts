import { Page,Locator} from "@playwright/test";

export class HomePage {
     readonly page: Page;
    readonly buttonLogout: Locator;
    readonly successLogout: Locator;

    constructor (page : Page){
        this.page = page;
        this.buttonLogout = page.getByRole('link',{name:'Logout'});
        this.successLogout = page.getByText('You logged out of the secure area!');
    }

    async goto() {
        await this.page.goto('/secure');
    }
    async clickLogout() {
    await this.buttonLogout.click();
  }
}