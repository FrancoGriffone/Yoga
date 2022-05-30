import React,  { useContext } from "react"; 
import {CartContext} from '../../../Context/CartContext'
import { Link } from "react-router-dom";


const CardWidget = () => {

    
    const { itemsTotal } = useContext(CartContext)
    

    return(
        <>
            <div>
                    <div>
                        <Link to="/cart">
                            <div>{itemsTotal}</div>
                        </Link>
                    </div>
                  
            </div>
        </>
    )
    
}

export default CardWidget