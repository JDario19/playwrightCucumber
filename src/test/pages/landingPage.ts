import { Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class landingPage extends basePage{
    readonly page: Page;
    private readonly singInButton : Locator;

    constructor(page:Page){
        super(page);
        this.page = page;
        this.singInButton = page.locator('//*[@href="#login"]');
    }

    async clickSignInButton(){
        await this.clickElement(this.singInButton);
    }
}