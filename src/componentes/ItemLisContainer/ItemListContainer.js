import { useEffect, useState } from "react"
// import {getProducts,  getProductsByCategory} from "../utilis/product"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"  
// import Loader from "./Loarde"
import { getDocs, collection,query,where, doc  } from "firebase/firestore"
import{ db} from "../../firebase/firebaseConfig"


 const ItemListContainer= ({greeting}) => {
    const [Products, setProducts] = useState([])
    const {loading, setLoading} =useState (true)
    
     

    const { categoryId} = useParams()
   
    

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
       ?  query (collection(db,"prodcutos"), where("category", "=",categoryId))
       : collection(db,"productos")


        getDocs(collectionRef)
        .then(resp =>{
            const productosAdapted =resp.docs.map(doc=>{
                const data= doc.data()
                return { id: doc.id, ...data}

                         })
                         setProducts(productosAdapted)
                        })
                        .catch(error=> {
                            console.log(error)
                        })
                        .finally(() => {
                            setLoading(false)
                        })
      
    },[categoryId])
        // const asyncFunc = categoryId ? getProductsByCategory : getProducts
         
        // asyncFunc(categoryId)
        // .then((response) => {
        //     setProducts(response)
            
        // })
        //   .catch(error =>{
        //     console.error(error)
        // })    

    
    
        return (
          <div>
<h1>{greeting}</h1>
            <ItemList Products={Products} />
            </div>
        )
    }

   
    

export default ItemListContainer