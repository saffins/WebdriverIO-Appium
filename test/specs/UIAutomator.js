describe("suite",()=>{


    it("test",async ()=>{
        const chromeApp = await $('android=new UiSelector().textContains("Chrome")')
        await browser.pause()
        await chromeApp.click();
        

    })

})