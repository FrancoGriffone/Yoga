import React, { useState, useEffect } from 'react';
import { ItemDetail } from "../ItemDetail/ItemDetail";
// FIRBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getItems = async () => {
    const q = query(collection(db, "cursos"))
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs)
      console.log (docs)
    }
    getItems()
  }, 
  [])

  return <ItemDetail {...product} />;
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
