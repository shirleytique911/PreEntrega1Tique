// import  {useState, useEffect}  from 'react'
// import  ItemList from '../ItemList/ItemList'

// import {useParams} from 'react-router-dom'

// import {getDocs,collection, query, where } from 'firebase/firestore'
// import {db} from "../../firebase/firebaseConfig"

// const ItemListContainer = ({greeting}) => {

// const [ Products, setProducts] = useState([])
// const [ loading, setLoading] = useState( true)

// const { category} = useParams()


//     useEffect(() => {
//         setLoading(true)

//         const collectionRef = category
//         ? query(collection(db,'productos'),where('category', '==', category))
//         : collection(db,'productos')

//         getDocs(collectionRef)
//         .then(response => {
//          const productosAdapted =  response.docs.map(doc=>{
//             const data = doc.data()
//                 return{id: doc.id, ...data}
//             })
//             setProducts(productosAdapted)
//         })
//         .catch((error) =>{
//             console.log("algo salio mal")
//             console.log(error)

//         })
//         .finally(()=>{
//             setLoading(false)
//         })

//         // .then((res) =>{
//         //     setLoading(false);
//         //     if (category){
//         //         setProducts(res.filter((prod) => prod.category ===category));
//         //     }else{
//         //         setProducts(res);
//         //     }


//         // })
    
//     },[category])
//     return (
//         <div>
//             {!loading
//             ?
//             <ItemList Products = {Products} />
//             :
//             <h2>Cargando......</h2>
//             }
//         </div>
//     );
// }








// export default ItemListContainer;