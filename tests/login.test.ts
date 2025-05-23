import { chromium, test } from '@playwright/test';
import path from 'path';


test('Login Test', async ( ) => {
    // Go to the login page
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();  
   
    await page.goto('https://ecommerce-playground.lambdatest.io/');
   
    await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),'My account')]");
    
    await page.click("text=Login");
    
    
    await page.waitForTimeout(4000); 
    await page.fill('input[name="email"]', 'bhupesh@gmail.com');
    await page.fill('input[name="password"]', '1234');  
    await page.click('input[value="Login"]');
    
    await page.waitForTimeout(2000); 

});