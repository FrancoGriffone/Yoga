import React,  { useContext } from "react"; 
import {Context} from "../../../../Context/Context"
import { Link } from "react-router-dom";



const Cart = () => {
const {cart, removeItem, totalDeCompra, vaciarCart } = useContext(Context)


return(
    <>  
            <div className="titleCart">Este es tu carrito!</div>
                {cart.length === 0 ? (<div className="cartVacio">
                                        <div className="imgCartVacio"></div>
                                        <div>
                                            <div className="titleCartVacio">Al parecer tu carrito se encuentra vacio!</div>
                                        </div>
                                    </div>) : cart.map((items) => {

                    return <div key={items.id} className="productInCart">                                      
                                    <div className="cardCart">  
                                        <img src={items.image} alt={items.id} />
                                        <div className="cardProductBody">
                                            <div className="productTitle">{items.title}</div>
                                            <div>Cantidad: {items.quantity}</div>
                                            <div>Precio Unitario ${items.price}</div>
                                            <div>Total = ${items.price*items.quantity}</div>
                                        </div>
                                        <div id={items.id} onClick={removeItem} className="far fa-trash-alt removeItem"></div>
                                    </div>                           
                        </div>
                }
                )
                }

                { cart.length !== 0  ? <div className="pt-5 productInCart">
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

console.log ()
export default Cart