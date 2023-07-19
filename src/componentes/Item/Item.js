import { Link } from "react-router-dom";


const Item = ({product,precio,unidades,img}) =>{

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product}
                </h2>
                </header>
                <picture>
                    <img src={img} alt={product}className="ItemImg"/>
                </picture>
                <section>
                    
                    
                    <p className="Info">
                        precio:$ 
                        {precio}
                    </p>
                    <p className="Info">
                        stock disponible: {unidades}
                    </p>

                </section>
                    <footer className='ItemFooter'>
                        <Link to={`/item/${id}`} className='Option'>ver detalle</Link>
                        </footer> 
            

                </article>


    )
}

export default Item;