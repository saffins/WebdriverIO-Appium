describe("suite",()=>{

    it("test",async ()=>{

            actualist = []
            const list = await $('//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]')

            for(const el of list){
                    actualist.push(await el.getText())
            }

    })

})