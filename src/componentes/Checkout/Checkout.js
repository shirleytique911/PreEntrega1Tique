import  {useState, useEffect}  from 'react'

import Checkout from '../Checkout/Checkout'
import { db} from "../../firebase/firebaseConfig"



import CheckoutFrom from '../CheckoutFrom/CheckoutFrom'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { writeBatch } from 'firebase/firestore'


const Checkout = () => {
    const [ loading, setLoading] =useState (false)
    const [ ordeId, setOrderId] = useState ('')

    const { cart, total, clearCart } = useContext (CartContext)
     const createOrder = async ({name, phone,email}) =>{
        setLoading(true)

        try{
            const objOrder= {
                buyer:{
                    name,phone,email
                },
                items:cart,
                total: total,
                date: Timestamp.fronDate(new Date())
            }
            const batch = writeBatch(db)
        }
     }
}