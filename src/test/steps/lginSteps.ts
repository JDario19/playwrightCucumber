import {Given, When, Then} from '@cucumber/cucumber';
import {chromium, Browser, Page, expect} from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import { landingPage } from '../pages/landingPage';
import { homePage } from '../pages/homePage';
import { settingsPage } from '../pages/settingsPage';
import { signInPage } from '../pages/signInpage';
import basePage from '../pages/basePage';
import { sign } from 'crypto';

 let landingpage:landingPage;
 let homepage:homePage;
 let settingspage:settingsPage;
 let signpage:signInPage;


  Given('I am on the conduit login page', async function () {
    landingpage = new landingPage(pageFixture.page);
    homepage = new homePage(pageFixture.page);
    settingspage = new settingsPage(pageFixture.page);
    signpage = new signInPage(pageFixture.page);

    await landingpage.navegateTo('https://react-redux.realworld.io/#/?_k=zphnm5')
    await landingpage.clickSignInButton();
  });

  When('I login with valid credentials', async function () {
    await signpage.typeEmailId('j.monton90@gmail.com');
    await signpage.typePassword('T3st123');
    await signpage.clickSignInButton();
  });


  When('I click on the settings button', async function () {
    //await pageFixture.page.locator('//*[@href="#settings"]').click()
    await homepage.clickSettingsbutton()
  });

  When('I click on the logout button', async function () {
    //await pageFixture.page.locator('//*[@class="btn btn-outline-danger"]').click;
    await settingspage.clickLogOutButton();

  });

  Then('I route back to the login page', async function () {
    await pageFixture.page.locator('//*[@href="#login"]').isVisible();
  });


