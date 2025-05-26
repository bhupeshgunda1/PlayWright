import {test, expect} from "@playwright/test"

test("Interaction with input fields", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageinput = page.locator("input#user-message");
    await messageinput.scrollIntoViewIfNeeded();
    console.log(await messageinput.getAttribute("placeholder"));
    messageinput.fill("Bhupesh");
    await page.click("button#showInput");
    expect(messageinput).toHaveAttribute("placeholder","Please enter your Message");
    messageinput.fill("Bhupesh");
    page.click("button#showInput");
    const messageLabel = page.locator("p#message");
    expect(messageLabel).toHaveText("Bhupesh");
})

test("addition", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const field1input = page.locator("input#sum1")
    const field2input = page.locator("input#sum2")
    await field1input.fill("432543")
    await field2input.fill("5646")
    const addBtn = page.locator("//button[text()='Get Sum']");
    const result = page.locator("#addmessage")
    await addBtn.click();
    //console.log(await result.textContent());
    await expect(result).toHaveText("438189");
})

test("checkbox", async({page})=>{

  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
  const checkBox = page.locator("id=isAgeSelected");
  expect(checkBox).not.toBeChecked();
  await checkBox.check()
  expect(checkBox).toBeChecked();
  


})