// import {ItemCount} from '../ItemCount/ItemCount'
import  {useState, useEffect}  from 'react'
import  {getProducts}  from '../utilis/product'
import  ItemList from '../ItemList/ItemList'

import {useParams} from 'react-router-dom'


const ItemListContainer =({ greeting }) => {
const [Products, setProducts] = useState([])

const { category } = useParams()
console.log(category)

const [loading, setLoading] = useState(true);

    useEffect(() =>{
        setLoading(true);
        getProducts()
        .then((res) =>{
            setLoading(false);
            if (category){
                setProducts(res.filter((prod) => prod.category ===category));
            }else{
                setProducts(res);
            }
            

        })
    }, [category])
    return (
        <div>
            {!loading
            ?
            <ItemList Products = {Products} />
            :
            <h2>Cargando......</h2>
            }   
        </div>
    );
}








export default ItemListContainer;