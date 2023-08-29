import  { useState, useEffect } from 'react';
// import { getProductsById} from '../utilis/product';
import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from "react-router-dom";

import { getDoc,doc } from 'firebase/firestore';
import { db} from '../../firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [Products, setProducts] = useState(null) 

const {itemId} =useParams ()

    useEffect(() => {
const docRef= doc(db,"productos",itemId);
getDoc(docRef)
.then((resp)=>{
    setProducts({...resp.data(),product: resp.product});
})

    //  getProductsById(itemId)

    //  .then(response =>{
    //  setProducts(response)
    //  })
    //  .catch(error =>{
    //     console.error(error)
    //  })
     }, [itemId])




     return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...Products} />
        </div>
     )

     }

     export default ItemDetailContainer