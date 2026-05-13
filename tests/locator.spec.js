// //locators
// //in general locators -> Id,class,xpath,css

// // in built locators

// // 1. getByTestId()
// // 2. getByText()
// // 3. getByPlaceholder()
// // 4. getByAltText()
// // 5. getByLabel()
// // 6. getByTitle()
// // 7. getByRole()

// import{test} from '@playwright/test';
// test('uploading and downloading the file',async({page})=>{
//     await page.goto('https://demoqa.com/upload-download');
//     await page.locator('#uploadFile').setInputFiles('C:/Users/PADMA/Downloads/4432376998.pdf')
//     const [download]=await Promise.all([
//         page.waitForEvent('download'),
//         page.locator('#downloadButton').click()
//     ]);
//     await download.saveAs("C:/Users/PADMA/OneDrive/Documents/file1.png");
// })
// // test('drag and drop',async({page})=>{
// //     await page.goto("https://practice.expandtesting.com/drag-and-drop#google_vignette");
// //     await page.locator("#examples-dropdown").click();
// // })
// // test('locating the element',async({page})=>{
// //     await page.goto('https://www.amazon.in');
// //     // await page.locator("#nav-link-accountList-nav-line-1").click();
// //     // await page.locator("#ap_email").fill('abc@gmail.com');
// //     // await page.locator(".a-button-input").click();
// //     // await page.locator("#ap_password").waitFor();
// //     // await page.locator("#ap_password").fill("kanivini@321");
// //     // await page.locator("#signInSubmit").click();
// //     await page.locator("input#twotabsearchtextbox").fill('waffle machine');
// // })
// // test('facebook login',async({page})=>{
// //     await page.goto('https://www.facebook.com');
// //     await page.locator('[name="email"]').fill('samu@gmail.com');
// //     await page.locator('[type="password"]').fill('vini@123');
// //     await page.locator('[aria-label="Log in"]').click();
// // })
// // test('insta login',async({page})=>{
// //     await page.goto('https://www.instagram.com');
// //     await page.locator('[type="text"]').fill('_vinitha2709_');
// //     await page.locator('[name="pass"]').fill('idiot@123');
// //     await page.locator('//span[text()="Log in"]').click();
// //     //await page.locator('[role="button"]').filter({ hasText: 'Log in' }).click();
// // })
