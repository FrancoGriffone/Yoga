import React,  { useContext } from "react"; 
import {Context} from '../../../../Context/Context'
import { Link } from "react-router-dom";


const CardContext = () => {

    
    const { itemsTotal } = useContext(Context)
    

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

export default CardContext