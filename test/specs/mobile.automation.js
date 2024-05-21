
describe('My login application', () => {
    it ('should login with valid cridentials', async () =>{
        await $('id:com.fghilmany.dietmealapp:id/et_name').setValue('ramdani');
        await $('id:com.fghilmany.dietmealapp:id/et_weight').setValue('123');
        await $('id:com.fghilmany.dietmealapp:id/et_height').setValue('123');
        await $('id:com.fghilmany.dietmealapp:id/rb_male').click();
        await $('id:com.fghilmany.dietmealapp:id/bt_next').click();
        await $('id:com.fghilmany.dietmealapp:id/rb_rest').click();
        await $('id:com.fghilmany.dietmealapp:id/bt_finish').click();
    })
})