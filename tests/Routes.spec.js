const {test,expect} = require('@playwright/test');
test('Test 1 : create Routes',async ({page})=>{

await page.goto('https://kazam-vms.vercel.app/org');
await page.setViewportSize({ width: 1500, height: 1080 });
await page.locator('//input[@id="large-input"]').fill('pushpa@kazam.in');
await page.locator("//input[@id='password']").fill('Geetha@123');
await page.locator("//button[normalize-space()='Login']").click();
await page.locator("//p[normalize-space()='Greencell NueGo']").click();
await page.locator("//span[normalize-space()='Vehicle Management']").click();
await page.locator("//a[normalize-space()='Trips & Routes']").click();
await page.locator("//span[normalize-space()='Routes']").click();
await page.locator("//button[@type='submit']").click();
await page.locator("//input[@id='large-input']").fill("kr market to HSR");
await page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(2) > select:nth-child(1)").selectOption({value: '677278092ded5decc29a15a5'});
await page.locator("//select[contains(@class,'block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 text-sm p-2.5 bg-white px-6 focus:border-kazamGray-300 focus:ring-kazamGray-300 rounded-lg p-2.5 border border-gray-300 slim-scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200')]").selectOption({value: '67723d8185fc69161fbe95f1'})
await page.locator("//input[contains(@placeholder,'Total Distance in km*')]").fill('30');
await page.locator("//button[normalize-space()='Add Route']").click();
});