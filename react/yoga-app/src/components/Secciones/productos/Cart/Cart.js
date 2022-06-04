import React,  { useContext } from "react"; 
import "./style.css"
import {Context} from "../../../../Context/Context"
import { Link } from "react-router-dom";
import CardContext from "../CardContext/CardContext";
import Button from 'react-bootstrap/Button';




const Cart = () => {
const {cart, removeItem, totalDeCompra, vaciarCart } = useContext(Context)


return(
    <>  
            <div>¡Este es tu carrito!</div>
                {cart.length === 0 ? (<div>
                                        <div>
                                            <div>¡Al parecer tu carrito se encuentra vacio!</div>
                                        </div>
                                    </div>) : cart.map((items) => {

                    return <div key={items.id} className="itemCompra">                                      
                                    <div>
                                        <div className="datosItem1">
                                            <img src={items.image} alt={items.id} width="20%"/>
                                            <Button className="button" id={items.id} onClick={ removeItem }>X</Button>
                                        </div> 
                                        <div className="datosItem2">
                                            <p>{items.title}</p>
                                            <p>Cantidad: {items.quantity}</p>
                                        </div>
                                        <div className="datosItem3">
                                            <p>Precio Unitario ${items.price}</p>
                                            <p>Total = ${items.price*items.quantity}</p>
                                        </div>
                                        
                                    </div>                           
                        </div>
                }
                )
                }

                { cart.length !== 0  ? <div>
                                            <div>
                                                <p>Total de la compra $ {totalDeCompra}</p>
                                                <CardContext />
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