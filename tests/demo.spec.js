//const{test,expect}=require('@playwright/test');
import{test,expect}from'@playwright/test';
test('launch url', async({page})=>{
    await page.goto("https://www.facebook.com/");
})
test('amazon', async({page})=>{
    await page.goto("https://www.instagram.com/");
})