import React from "react";
import { Item } from "./item";

export const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
};
