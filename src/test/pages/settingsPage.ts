import { Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class settingsPage extends basePage{
    readonly page: Page;
    private readonly logOutButton : Locator;


    constructor(page:Page){
        super(page);
        this.page = page;
        this.logOutButton = page.locator('//*[@class="btn btn-outline-danger"]');
    }

    async clickLogOutButton(){
        await this.clickElement(this.logOutButton);
    }

}