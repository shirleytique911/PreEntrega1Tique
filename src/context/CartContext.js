import { createContext, useState } from "react"

export const CartContext = createContext({
    cart:[]
})
 export const CartProvider =({ children}) =>{
    const [ cart, setCart] = useState ([])
    console.log(cart)

    const addItem =(item,quantity) => {
        if(!isInCart(item.id)){
            setCart(prev =>[...prev,{...item, quantity}])
        }else {
            console.error('El producto ya fue agregado')
        }
    }
    const removeItem =(itemId) => {
     const cartUpdated = cart.filtrar(prod => prod.id !== itemId)
     setCart (cartUpdated)
    }
    const clearCart =() => {
setCart([])
    }
 }