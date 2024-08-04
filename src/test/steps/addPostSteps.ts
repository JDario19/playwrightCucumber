import {Given, When, Then} from '@cucumber/cucumber';
import {chromium, Browser, Page, expect} from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

const articleName = "pLAYWRIGHT" + Math.random();

  When('I click on new post button', async function () {
    await pageFixture.page.goto('https://react-redux.realworld.io/#/?_k=zphnm5');
    await pageFixture.page.locator('//*[@class="ion-compose"]').click();
  });

  When('I fill up the require fields', async function () {
    await pageFixture.page.locator('//*[@placeholder="Article Title"]').fill(articleName)
    await pageFixture.page.locator(`//*[@placeholder="What's this article about?"]`).fill("qa testing")
    await pageFixture.page.locator('//*[@placeholder="Write your article (in markdown)"]').fill("Learn playwright")
    await pageFixture.page.locator('//*[@placeholder="Enter tags"]').fill("playwright")
  });

  When('I publish the article', async function () {
    await pageFixture.page.locator('//*[@class="btn btn-lg pull-xs-right btn-primary"]').click();
  });

  /*
  Then('I should see the article posted', async function () {

  });*/