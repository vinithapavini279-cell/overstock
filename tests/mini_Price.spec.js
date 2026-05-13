// import{test} from '@playwright/test';
// test('finding minimum price',async({page})=>{


//     // await page.goto('https://www.myntra.com');
//     // await page.locator('(//a[text()="Kids"])[1]').hover();
//     // await page.locator('//a[@href="/boy-tshirts"]').click();
//     // //number of the products in the page
//     // await page.waitForSelector('//div[@class="product-imageSliderContainer"]')
//     // const total_Product=await page.locator('//div[@class="product-imageSliderContainer"]').count();
//     // console.log("Total product is: ", total_Product);
//     // //lists of the product prices
//     // const price=await page.locator('[class="product-discountedPrice"]').allTextContents();
//     // console.log(price);
//     // //minimum price of the lists
//     // let arr=price[0];
//     // let pro=0;
//     // for(let i=1;i<price.length;i++){
//     //     if(arr>price[i]){
//     //         arr=price[i];
//     //         pro=i;
//     //     }
//     // }
//     // console.log(arr);
//     // // Name of the minimum product
//     // const product_name=await page.locator('[class="product-brand"]').nth(pro).textContent();
//     // console.log("Product name is: ", product_name);



//       await page.goto("https://www.myntra.com");
//       await page.hover("//a[@data-group='kids']");
//       await page.click("//a[@href='/boy-tshirts']");
//       //number of the products in the page
//     await page.waitForSelector('//div[@class="product-imageSliderContainer"]')
//     const total_Product=await page.locator('//div[@class="product-imageSliderContainer"]').count();
//     console.log("Total product is: ", total_Product);
//     //lists of the product prices
//     const li_price=await page.locator('[class="product-discountedPrice"]').allTextContents();
//     console.log(li_price);
//     //minimum price of the lists
//       await page.waitForSelector('.product-base');
//       const pro_price=await page.locator("//li[@class='product-base']/descendant::span[@class='product-discountedPrice']").allTextContents();
//       const price=pro_price.map(p=>{
//         return parseInt(p.replace(/[^0-9]/g,''));
//       })
//       const min_price=Math.min(...price);
//       console.log("minimum price is :",min_price);
//       const product=await page.locator("//span[@class='product-discountedPrice' and text()=499]/ancestor::div[@class='product-price']/preceding-sibling::h3[@class='product-brand']").textContent();
//       console.log("product name is :",product);

// })
