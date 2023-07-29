import { Link } from "react-router-dom";

const Item =({id, product,img,precio,unidades,category,}) => {

    return(
        <article className="CardItem  flex-wrap my-30 mx-80 mr-80  justify-around flex-wrap py-12  text-center font-serif ">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product}
                </h2>
                </header>
                <picture>
                    <img src={img} alt={product}className="ItemImg w-4/5  h-64 rounded-xl"/>
                </picture>
                <section>
                    
                    
                    <p className="Info">
                        precio:$ 
                        {precio}
                    </p>

                    <p className="Info">
                        stock disponible: {unidades}
                    </p>
                    
                    <p className="Info">
                        Categoria: {category}
                    </p>

                </section>
                    <footer className='ItemFooter'>
                        <Link to={`/item/${id}`} className='Option'>ver detalle</Link>
                        </footer> 
            

                </article>

    
    )
}

export default Item