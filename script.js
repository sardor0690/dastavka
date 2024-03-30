function cartObj() {
    let rand = 1
  
    const priceList = {
      1: {
        Lavash: {
          info: 'big cheese',
          price: 22000
        },
        Hotdog: {
          info: 'mini',
          price: 15000
        },
        Cola: {
          info: '1.5 L',
          price: 9000
        },
        dastavka: {
          price: 9000
        }
      }
    }
  
    return priceList[rand]
  }
const obj =cartObj()
console.log(obj);
const priceList = {
   
      Lavash: {
        info: 'big cheese',
        price: 22000
      },
      Hotdog: {
        info: 'mini',
        price: 15000
      },
      Cola: {
        info: '1.5L',
        price: 9000
      },
      dastavka: {
        price: 9000
      }
    
}
let totalPrice = 0
for (const key in priceList) {
    const pk = priceList[key]
    totalPrice += pk.price
}
//console.log("Sizning buyurtmangiz: " + 'Lavash' 
let pl = priceList.Lavash.info
let ph = priceList.Hotdog.info
let pc = priceList.Cola.info
let pd = priceList.dastavka.price
console.log("Sizning buyurtmangiz: " + 'Lavash ' + pl + ', Hotdog ' + ph + ', Cola ' + pc + '. Yetkazib berish xaqqi bilan jami: ' + totalPrice + ' dastavka ' + '(' + pd + ')');