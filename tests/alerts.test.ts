import { test, expect } from "@playwright/test";

test("handling alerts", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    await page.screenshot({ path: `before-alert.png` });
    page.on("dialog",async(alert)=>{
        const alertText = alert.defaultValue();
        console.log(alertText);
        alert.accept("Bhupesh");    
    })

    await page.locator("button:has-text('Click Me')").nth(2).click();
    await page.screenshot({ path: `after-alert.png` });
    expect(page.locator("id=prompt-demo")).toContainText("Bhupesh");


})


