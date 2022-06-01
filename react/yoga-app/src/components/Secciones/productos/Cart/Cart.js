import React,  { useContext } from "react"; 
import {Context} from "../../../../Context/Context"
import { Link } from "react-router-dom";
import { Data } from "../../../../data/Data";
import { useParams } from "react-router-dom";



const Cart = () => {
const {cart, removeItem, totalDeCompra, vaciarCart } = useContext(Context)

// const { itemId } = useParams();

// const myData = Data.find((items) => items.id === itemId);
// console.log (cart)

return(
    <>  
            <div>¡Este es tu carrito!</div>
                {cart.length === 0 ? (<div>
                                        <div>
                                            <div>¡Al parecer tu carrito se encuentra vacio!</div>
                                        </div>
                                    </div>) : cart.map((items) => {

                    return <div key={items.id}>                                      
                                    <div>  
                                        <img src={items.image} alt={items.id} />
                                        <div>
                                            <div>{items.title}</div>
                                            <div>Cantidad: {items.quantity}</div>
                                            <div>Precio Unitario ${items.price}</div>
                                            <div>Total = ${items.price*items.quantity}</div>
                                        </div>
                                        <div id={items.id} onClick={ removeItem }></div>
                                    </div>                           
                        </div>
                }
                )
                }

                { cart.length !== 0  ? <div>
                                            <div>
                                                TOTAL DE SU COMPRA $ {totalDeCompra}.
                                            </div>
                                            <div className="d-flex">
                                                <button className="btn btn-danger me-4" onClick={ vaciarCart } >Vaciar Carrito</button>
                                                <Link to={"/checkout"} className="btn btn-success ms-4">Finalizar Compra</Link> 
                                            </div>
                                        </div> : <div/> }
       

    </> 
    
)

}
export default Cart