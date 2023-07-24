import ItemCount from "../ItemCount/ItemCount"
import { products } from "../utilis/product"

const ItemDetail = ({precio, unidades, category, product, ciudad, img }) =>{





    return(
        <article className="CardItem flex my-30 mx-80 mr-80  justify-around flex-wrap py-12 text-center font-serif">
        <header className="Header flex my-30 mx-80 mr-80  justify-around flex-wrap py-12 ">
            <h2 className="ItemHeader">
                {product}
            </h2>
            </header>
            <picture>
                <img src={img} alt={product}className="ItemImg  w-4/5  h-64 rounded-xl  "/>
            </picture>
            <section>
            <p className="Info">
                   Articulo : {products} 
                </p>
            <p className="Info">
                   Ciudad: {ciudad} 
                </p>
                <p className="Info">
                   Precio: ${precio} 
                </p>
                <p className="Info">
                    Stock disponible :{unidades}
                </p>
                <p className="Info">
                    Categoria: {category}
                </p>

            </section>
            
                <footer className='ItemFooter flex justify-center border-none outline-0 p-3 text-lime-500 bg-black text-center w-full cursor-pointer text-lg'>

                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada flex justify-between',quantity)}/>

                    </footer> 
        

            </article>


)
}  

export default ItemDetail;

    
