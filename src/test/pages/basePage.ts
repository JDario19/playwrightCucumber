import { Locator, Page } from "@playwright/test";


export default class basePage{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    //commom method to navegate to a URL
    async navegateTo(url:string){
        await this.page.goto(url)
    }

    //commom method to click an element
    async clickElement(element:Locator){
        await element.click();
    }

    //commom method to fill out a form field
    async fillFormField(element:Locator, value:string){
        await element.fill(value);
    }

    //commom method to retrieve text from an element
    async getElementText(element:Locator): Promise<string> {
        return element.innerText();
    }
    
    //commom method to wait for element visible
    async waitForElementVisible(selector:string) {
       await this.page.waitForSelector(selector, {state : 'visible'})
    }

     //commom methodto wait for element hidden
     async waitForElementHidden(selector:string) {
        await this.page.waitForSelector(selector, {state : 'hidden'})
     }

     //commom methodto to take an screenshot
     async takesCREENSHOT(filename:string) {
        await this.page.screenshot({path : filename})
     }
}