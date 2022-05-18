import React, { useEffect, useState } from 'react';
import { itemDetail }  from "./itemDetail";
import  { Data }  from "../../../data/Data";

export const itemDetailContainer = () => {
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

  return <itemDetail items={items} />;
};

export default itemDetailContainer;