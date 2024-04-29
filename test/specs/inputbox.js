describe("suite",()=>{

    it("test",async ()=>{
        const chromeApp = await $('android=new UiSelector().textContains("Chrome")')
        await browser.pause()
        await chromeApp.click();
        const inp = await $('//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]')
        await inp.addValue("saffin test")
        expect(await text).toHaveText('saffin test')
    
    })

})

