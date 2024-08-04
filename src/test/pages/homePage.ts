import { Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class homePage extends basePage{
    readonly page: Page;
    private readonly settingsButton : Locator;

    constructor(page:Page){
        super(page);
        this.page = page;
        this.settingsButton = page.locator('//*[@href="#settings"]');

    }

    async clickSettingsbutton(){
        await this.clickElement(this.settingsButton)
    }

}