// function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {}

// class Item {
//     public price: number;
//     public name: string;

//     constructor(name: string ,price: number) {
//         this.name = name;
//         this.price = price;
//     }

//     @addItemInfoDecorator
//     public getItemInfo() {
//         return {
//             name: this.name, 
//             price: this.price
//         };
//     }
// }

// let item = new Item('Apple', 100);
// console.log(item.getItemInfo());




function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {

const firstFunc = descriptor.value;
descriptor.value = function () {
    let res = firstFunc.apply(this);
    return {
        date: new Date(),
        name: res.name,
        price: res.price,
        info: `${res.name} - ${'$' + res.price}`
    };
}


class Item {
    public price: number;
    public name: string;

    constructor(name: string ,price: number) {
        this.name = name;
        this.price = price;
    }

    @addItemInfoDecorator
    public getItemInfo() {
        return {
            name: this.name, 
            price: this.price
        };
    }
}

let item = new Item('Apple', 100);
console.log(item.getItemInfo());