describe("suite",()=>{


    it("test",async ()=>{
        const chromeApp = await $('~Chrome')
        await browser.pause()
        await chromeApp.click();
        await browser.pause(5000)
        const classNam = await $('//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]')
        text = classNam.getText()
        console.log(text)
        await expect(text).toHaveText('Search or type web address')
        // await more.click();

    })

})