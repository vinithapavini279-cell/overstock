import{test} from '@playwright/test';
test('Add ptoducts to cart', async({page})=>{
    await page.goto('https://www.flipkart.com');
    const cut=await page.getByRole('button',{name:'✕'});
    await page.waitForTimeout(3000);
    if(await cut.isVisible()){
        await cut.click();
    }
    await page.locator('(//input[@name="q"])[1]').fill('Harry potter book');
    await page.locator('[type="submit"]').click(); //await page.keyboard.press('Enter');
    // await page.locator('(//a[text()="Harry Potter : The Complete Collection (Set of 7 Books)..."])[1]').click();
    const product = page.getByRole('link', { name: /Harry potter book/i }).first();
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        product.click()
    ]);
    
})