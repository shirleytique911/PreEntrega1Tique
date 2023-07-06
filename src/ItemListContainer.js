import ItemCount from "./componentes/ItemCount";

const onAdd =()=>{
    alert("GRACIAS POR SU COMPRA")
}

const ItemListContainer =(props)=> {
    return(
        <div>
        
       <h1>{props.greeting}</h1>
       <ItemCount initial={1} stock={8} onAdd={onAdd}/>
       </div>
    )
}

export default ItemListContainer;