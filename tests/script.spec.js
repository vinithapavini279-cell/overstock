import{test} from '@playwright/test';
test('product select using if condition',async({page})=>{
    await page.goto('https://www.amazon.in');
    await page.locator('input#twotabsearchtextbox').fill('sarees');
    await page.keyboard.press('enter');
})