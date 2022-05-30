import React,  { useContext } from "react"; 
import {Context} from "../../../../Context/Context"
import { Link } from "react-router-dom";

const Cart = ( ) =>{

    const {cart, removeItem, totalDeCompra, vaciarCart } = useContext(Context)

   
    
    return(
        <>  
          <div>¡Este es tu carrito!</div>
            {cart.length === 0 ? (<div>
                                    <div></div>
                                        <div>
                                            <div>¡Al parecer tu carrito se encuentra vacio!</div>
                                        </div>
                                </div>) : cart.map((items) => {
                return  <div key={items.id}>                                      
                            <div>  
                                <img src={items.image} alt={items.id} />
                                    <div>
                                        <div>{items.title}</div>
                                        <div>Cantidad: {items.quantity}</div>
                                        <div>Precio Unitario ${items.price}</div>
                                        <div>Total = ${items.price*items.quantity}</div>
                                    </div>
                                <div id={items.id} onClick={removeItem}></div>
                            </div>                           
                        </div>
                    }
                    )
                    }
                    { cart.length !== 0  ? 
                        <div>
                            <div>
                                Total de su compra $ {totalDeCompra}.
                            </div>
                            <div>
                                <button onClick={ vaciarCart } >Vaciar Carrito</button>
                                    <Link to={"/"}>Finalizar Compra</Link> 
                            </div>
                            </div> : 
                        <div/> }
        </> 
    )

}


export default Cart