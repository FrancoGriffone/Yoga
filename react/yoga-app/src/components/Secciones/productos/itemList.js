import React from "react";
import { Item } from "./item";

export const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};
