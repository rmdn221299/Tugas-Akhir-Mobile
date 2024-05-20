describe('Open Application',() =>{
    it('should open apps', async() => {
        await $("com.fghilmany.dietmealapp:id/et_name").click();
        await $("com.fghilmany.dietmealapp:id/et_name").sendKeys("ramdani");
        await $("com.fghilmany.dietmealapp:id/et_weight").clicks();
        await $("com.fghilmany.dietmealapp:id/et_weight").sendKeys("123123");
        await $("com.fghilmany.dietmealapp:id/et_height").click();
        await $("com.fghilmany.dietmealapp:id/et_weight").sendKeys("123123");
        await $("com.fghilmany.dietmealapp:id/rb_male").click();
        await $("com.fghilmany.dietmealapp:id/bt_next").click();
        await $("com.fghilmany.dietmealapp:id/bt_rest").click();
        await $("com.fghilmany.dietmealapp:id/bt_finish").click();
       })
})