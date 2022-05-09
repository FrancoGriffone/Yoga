import React from "react";
import {ItemCount} from "./ItemCount";

export const Item = ({ item }) => {
        return (
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                        <ItemCount />
                    </div>
                </div>
                )
};