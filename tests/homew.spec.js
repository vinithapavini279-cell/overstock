import{test} from '@playwright/test';
test('Add ptoducts to cart', async({page})=>{
    await page.goto('https://www.myntra.com/boy-tshirts');
    //await page.locator('(//div[@class="desktop-navLink"])[3]').click();
    const total_Product=await page.locator('//div[@class="product-imageSliderContainer"]').count();
    await page.waitForTimeout(2000);
    console.log(total_Product);
    const price=await page.locator('//span[@class="product-discountedPrice"]');
    const pri=await price.allTextContents();
    console.log(pri);
})