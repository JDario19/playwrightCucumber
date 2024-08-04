import { Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class signInPage extends basePage{
    readonly page: Page;
    private readonly emailInput : Locator;
    private readonly passwordInput : Locator;
    private readonly signInbtn : Locator;

    constructor(page:Page){
        super(page);
        this.page = page;
        this.emailInput = page.locator('//*[@placeholder="Email"]');
        this.passwordInput = page.locator('//*[@placeholder="Password"]');
        this.signInbtn = page.locator('//*[@type="submit"]');

    }

    async typeEmailId(emailId:string){
        await this.fillFormField(this.emailInput,emailId)
    }

    async typePassword(pasword:string){
        await this.fillFormField(this.passwordInput,pasword)
    }

    async clickSignInButton(){
        await this.clickElement(this.signInbtn);
    }
}