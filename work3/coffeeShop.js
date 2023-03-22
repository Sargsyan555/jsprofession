class CoffeeShop{
    constructor(){
        this.name = '',
        this.menu = [
            {name :'coffee', type: 'drink', price: 2000},
            {name :'tea', type: 'drink', price: 3000}
        ]
        this.order = []
    }
    
    addOrder(name){
        for(let item of this.menu){
            for (let key in item){
                if(item[key] === name){
                    this.order.push(name)
                }else{
                    return 'This item is currently unavailable'
                }
            }
        }
    }
    fulfillOrder(item){
        if(this.order.length === 0){
            return `The ${item} is ready`
        }else{
            return 'All orders have been fulfilld'
        }
    }
    listOrders(){
       return this.order
    }
    dueAmount(){
        let sum = 0
        for(let element of this.order){
             let filterdItem = this.menu.filter((item) => {
                return true
             })
             sum += filterdItem[0].price
        }
        return sum
    }
    cheapestitem(){
        let res = this.menu.map(item => item.price)
        return Math.max(...res)
    }
    drinksOnli(){
        return this.menu.filter(item => item.type === 'drink')

    }
    foodsOnli(){
        return this.menu.filter(item => item.type === 'food')

    }

}
let tcs = new CoffeeShop()
console.log(tcs.addOrder('hot cocoa'));
console.log(tcs.addOrder('iced tea'));
