const users = {
    emp:"KEI3730",
    price:500,
    printemp:function(){
        console.log(`${this.emp}, is my employee id`);
    }
}
printemp(users);