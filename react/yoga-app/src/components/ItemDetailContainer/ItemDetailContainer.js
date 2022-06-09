import React, { useState, useEffect } from 'react';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
// FIRBASE - FIRESTORE
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    
    const getItems = async () => {
      const q = doc(collection(db, "cursos"), itemId);
      const querySnapshot = await getDoc(q);
      setProduct({ ...querySnapshot.data(), id: querySnapshot.id });
    };
    getItems();
    setTimeout (() => {
      setLoading (false)
    }, 1000);
  }, []);

  return loading ? <h2>Cargando datos...</h2> : <ItemDetail {...product} />;
}




// import React, { useState, useEffect } from 'react';
// import {ItemDetail} from "../ItemDetail/ItemDetail"
// import { Data } from '../../data/Data';
// import { useParams } from 'react-router-dom';

// export const ItemDetailContainer = () => {
//   const [product, setProduct] = useState({});
//   const [loading, setLoading] = useState(true);

//   const { itemId } = useParams();
  
//   useEffect(() => {
//     setLoading(true);
//     const getItems = new Promise((resolve) => {
//       setTimeout(() => {
//         const myData = Data.find((item) => item.id === itemId);

//         resolve(myData);
//       }, 1000);
//     });

//     getItems
//       .then((res) => {
//         setProduct(res);
//       })
//       .finally(() => setLoading(false));
//   }, [itemId]);

//   return loading ? <h2>Cargando datos...</h2> : <ItemDetail {...product} />;
// };
