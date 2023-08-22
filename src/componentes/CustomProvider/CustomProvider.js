import { createContext, useState } from "react"

export const cartContext = createContext()
const CartProvider = cartContext.Provider



function CustomProvider(props) {

    const [cantidad, setCantidad] = useState(0)
    const [carrito, setCarrito] = useState([])


    const agregarAlCarrito = (nuevaCant,nuevoItem) => {
        
       
        
        const copia = carrito.slice(0)


        copia.push({id: 1, nombre: "Producto 1", precio: 100, imagen: "https://picsum.photos/200/300" , cantidad : 3})
        setCarrito(copia)

        setCantidad(nuevaCant)
    }
}

const eliminarDelCarrito = (id) => {
    console.log("Eliminar Del Carrito " + id)
}

const vaciarCarrito = () => {
    console.log("Vaciar Carrito")
}

const valorDelContexto = {
    carrito: carrito,
    valorTotal: 0,
    cantidad: cantidad,
    agregarAlCarrito: agregarAlCarrito,
    eliminarDelCarrito: eliminarDelCarrito,
    vaciarCarrito: vaciarCarrito
}

return (
    <CartProvider value={valorDelContexto}>
        {props.children}
    </CartProvider>
)



export default CustomProvider