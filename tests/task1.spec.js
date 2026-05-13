// import{test,expect} from '@playwright/test';
// test('table',async({page}){
//     await page.goto('https://demoqa.com/webtables');
//     const rows=await page.locator("//table/tbody/tr/td");
//     console.log(await rows.count());
// })
// // test('frame', async({page})=>{
// //     await page.goto('https://demo.automationtesting.in/Frames.html');
// //     await page.frameLocator('#singleframe').locator('input[type="text"]').fill("vinitha");
// //     await page.locator('//a[text()="Iframe with in an Iframe"]').click();
// //     await page.waitForSelector('//a[text()="Iframe with in an Iframe"]');
// //     await page.frameLocator('[src="MultipleFrames.html"]').frameLocator('[src="SingleFrame.html"]').locator('input[type="text"]').fill("moni");
// // })
// // test('draganddrop',async({page})=>{
// //     await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
// //     const frame =page.frameLocator('iframe[class="demo-frame"]');
// //     const src=frame.locator('[alt="The peaks of High Tatras"]');
// //     const tar=frame.locator("#trash");
// //     await src.dragTo(tar, { force: true });
// //     // await src.dragTo(tar);
// //     //await expect(frame.locator('#trash')).toContainText('High Tatras');
// // })
