const {test,expect} = require('@playwright/test');
test('create location',async ({page})=>{

await page.goto('https://kazam-vms.vercel.app/org');
await page.locator('//input[@id="large-input"]').fill('pushpa@kazam.in');
await page.locator("//input[@id='password']").fill('Geetha@123');
await page.locator("//button[normalize-space()='Login']").click();
await page.locator("//p[normalize-space()='Greencell NueGo']").click();
await page.locator("//span[normalize-space()='Locations & Geofencing']").click();
await page.locator("//button[normalize-space()='+ Add Location']").click();
await page.locator("//input[@class='p-2.5 text-base rounded-lg border mt-2 w-[20vw]']").fill('kottigepalya');
await page.waitForTimeout(3000);
await page.waitForSelector("//button[contains(@class,'block w-full text-left p-2.5 cursor-pointer hover:bg-gray-200')]")
const searchLocationOptions = await page.$$("//button[contains(@class,'block w-full text-left p-2.5 cursor-pointer hover:bg-gray-200')]")
for(let option of searchLocationOptions)
{
    const value = await option.textContent()
    //console.log(value);
    if(value.includes('Kottigepalya, Bengaluru, Karnataka, India '))
    {
        await option.click()
        break;
    }

}
await page.locator("//select[@class='w-full p-3 text-sm border border-gray-300 rounded-md focus:border-kazamGray-300 focus:ring-kazamGray-300 appearance-none bg-white']").selectOption({value: 'hub'});
await page.locator("div[class='mt-4'] select[class='w-full p-3 text-sm border border-gray-300 rounded-md focus:border-kazamGray-300 focus:ring-kazamGray-300 appearance-none bg-white']").selectOption({label: 'Karnal'});
await page.locator("//button[normalize-space()='+ Add Geofence']").click();

  const slider = await page.locator('//input[@id="radius"]'); // Adjust selector for your slider
  const sliderBoundingBox = await slider.boundingBox();
  
  // Define your target radius value
  const targetRadius = 100; // Example: target radius to set the slider to
  
  // Calculate the position on the slider corresponding to the target value
  const minRadius = 25;
  const maxRadius = 200;
  const sliderWidth = sliderBoundingBox.width;
  
  // Calculate the ratio of the target radius to the slider's range
  const ratio = (targetRadius - minRadius) / (maxRadius - minRadius);
  
  // Calculate the target X position on the slider's track
  const targetX = sliderBoundingBox.x + ratio * sliderWidth;
  
  // Move the mouse to the slider handle, drag it to the target position
  await page.mouse.move(sliderBoundingBox.x + sliderWidth / 2, sliderBoundingBox.y + sliderBoundingBox.height / 2); // Move to handle's current position
  await page.mouse.down(); // Press mouse to start dragging
  await page.mouse.move(targetX, sliderBoundingBox.y + sliderBoundingBox.height / 2); // Move handle to target position
  await page.mouse.up(); // Release mouse after drag
  
  // Wait for the radius value to update (adjust selector as needed)
  // Example: If the updated radius value is displayed in a div with class 'radius-display'
  await page.waitForSelector('.mr-2 float-right'); // Replace with the correct selector
  
  // Now get the updated radius value
  const newRadius = await page.locator('.mr-2 float-right').innerText(); // Adjust the selector based on your page
  console.log('New Radius:', newRadius);




 
//await page.locator("//button[@fdprocessedid='hlugtk']").click();
//await page.locator("//button[normalize-space()='Create']").click();
await page.waitForTimeout(5000);

});


