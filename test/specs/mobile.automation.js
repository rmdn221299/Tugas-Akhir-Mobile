describe('Open Application',() =>{
    it('should open apps', async() => {
        await $("//android.widget.TextView[@content-desc='Accesssibility']").click();
    })
})