// import  { useState, useEffect } from 'react';
// // import { getProductsById } from '../utilis/product';
// import ItemDetail from '../ItemDetail/ItemDetail'
// import { useParams } from "react-router-dom";

// import { getDoc,doc } from 'firebase/firestore';
// import { db} from '../../firebase/firebaseConfig'

// const ItemDetailContainer = () => {
//     const [Products, setProducts] = useState(null) 
//     const [ loading, setLoading] = useState( true)

//     const {itemId} =useParams()


//     useEffect(() => {
//      setLoading(true)

//      const docRef =doc (db,'productos', itemId)

//      getDoc(docRef)
//      .then(response =>{
//       const data = response.data()
//       const productosAdapted ={ id: response.id, ...data}
//         setProducts(productosAdapted)
//      })
//      .catch(error =>{
//         console.error(error)
//      })
//      .finally(()=> {
//       setLoading(false)
//      })
//      }, [itemId])




//      return(
//         <div className='ItemDetailContainer'>
//             <ItemDetail {...Products} />
//         </div>
//      )

//      }
//      export default ItemDetailContainer;

