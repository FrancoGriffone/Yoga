import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail1";
import  { Data }  from "../../../data/Data1";

export const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });

    getItems.then((res) => {
      setItems(res);
    });
  }, []);

  return <ItemDetail items={items} />;
};

export default ItemDetailContainer;