import { Page,Locator} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly buttonLogin: Locator;
    readonly errorMessage: Locator;
    readonly successMessage: Locator;
   

    constructor (page : Page) {
        this.page = page;
        this.usernameInput =page.getByLabel('Username');
        this.passwordInput =page.getByLabel('Password');
        this.buttonLogin   =page.getByRole('button', {name:'Login'});
        this.errorMessage = page.getByText('Your username is invalid!');
        this.successMessage = page.getByText('You logged into a secure area');
        
    }
    async goto() {
        await this.page.goto('/login', {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
  });
}
  
    async login (username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill (password);
        await this.buttonLogin.click();
    
    }
    

}