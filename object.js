const obj = {
    name: "Shivam",
    sayHello: () => {
        console.log(`Hello, ${this.name}`);
    },
    
}
obj.sayHello();