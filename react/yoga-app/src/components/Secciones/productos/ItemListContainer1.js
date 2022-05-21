import React, { useEffect, useState } from 'react';
import { ItemList } from "./ItemList1";
import  { Data }  from "../../../data/Data1";

export const ItemListContainer = () => {
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

  return <ItemList items={items} />;
};

export default ItemListContainer;