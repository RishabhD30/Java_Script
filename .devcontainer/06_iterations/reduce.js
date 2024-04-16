// REDUCE -> reduce fucntions is used to add the cart amount.
const shoppingcart = [
    { course:"java",
      price:200
    },
    { course:"python",
      price:500
    },
    { course:"JS",
      price:400
    },
    { course:"Ruby",
      price:1000
    }
]

const all_Shopping_Cart = shoppingcart.reduce(function (acc, item){ return acc + item.price},0)

// One Linner
// const all_Shopping_Cart =  shoppingcart.reduce((plus,item)=> plus+item.price,0)
console.log(all_Shopping_Cart);
