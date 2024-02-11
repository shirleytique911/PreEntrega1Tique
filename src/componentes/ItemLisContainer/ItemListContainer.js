import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [Products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const collectionRef = categoryId ?
                    query(collection(db, "productos"), where("category", "==", categoryId)) :
                    collection(db, "productos")

                const querySnapshot = await getDocs(collectionRef)
                const productosAdapted = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(productosAdapted)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [categoryId, setLoading]) // Aquí se incluye setLoading en la lista de dependencias

    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <p>Loading...</p> : <ItemList Products={Products} />}
        </div>
    )
}

export default ItemListContainer

