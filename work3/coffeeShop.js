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
            if(item.name === name){
                this.order.push(name)
                return 'added'
            }else{
                return 'This item is currently unavailable'
            }
        }
    }
    fulfillOrder(item){
        if(this.order.length !== 0){
           
            return `The ${item} is rea'dy. List Order : ${this.order}`
        }else{
            return `All orders have been fulfilld.  List Order : ${this.order}`
        }
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
tcs.addOrder('coffee')
console.log(tcs.addOrder('coffee'));
console.log(tcs.fulfillOrder('coffee'));
console.log(tcs.dueAmount());