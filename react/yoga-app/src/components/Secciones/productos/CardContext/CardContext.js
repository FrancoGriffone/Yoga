import React,  { useContext } from "react"; 
import {Context} from '../../../../Context/Context'


const CardContext = () => {


    
    const { itemsTotal } = useContext(Context)
            
        return(
                <>
                    <div id="carrito" className="carrito">
                            <div className="bag">
                                    <div className="totalArticles">{itemsTotal}</div>
                            </div>
                    </div>
                </>
            )
            
        }

export default CardContext