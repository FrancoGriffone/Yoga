import React,  { useContext } from "react"; 
import {Context} from '../../../../Context/Context'
import { useParams } from "react-router-dom";
import { Data } from "../../../../data/Data";


const CardContext = (
    id,
    title,
    image,
    price ) => {

    const { itemId } = useParams();

    const myData = Data.find((items) => items.id === itemId);
    console.log (cart)
    const {cart, removeItem } = useContext(Context)

    
    

    return(
        <>                                     
                                    <div>  
                                        <img src={image} alt={id} />
                                        <div>
                                            <div>{title}</div>
                                            <div>Cantidad: {1}</div>
                                            <div>Precio Unitario ${price}</div>
                                            <div>Total = ${price}</div>
                                        </div>
                                        <div id={id} onClick={ removeItem }></div>
                                    </div>                           
        </>
    )
    
}

export default CardContext