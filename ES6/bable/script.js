var obj = {
    name:"tom",
    logName(){
        console.log(this.name);
    }
};
obj.logName()