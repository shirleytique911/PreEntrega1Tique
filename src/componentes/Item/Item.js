
const Item = ({id,product,category,precio,unidades,img}) =>{

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
                        id:{id}
                    </p>
                    <p className="Info">
                       Precio: ${precio} 
                    </p>
                    <p className="Info">
                        stock disponible:{unidades}
                    </p>
                    <p className="Info">
                        categoria: {category}
                    </p>

                </section>
                    <footer className='ItemFooter'>
                        <button className='Option'>ver detalle</button>
                        </footer> 
                





                </article>



    )
}

export default Item;