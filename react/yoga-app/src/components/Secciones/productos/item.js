import React from "react";
import Button from 'react-bootstrap/Button';
import ModalItem from "./ModalItem";

export const Item = ({ item }) => {
        return (
                <div className="card" style={{ margin: "4rem" }}>
                    <div className="card-body">
                        <img src={item.image} style={{ width: "400px"}} alt={item.title}/>
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                            <div className="d-grid">
                            <Button className="btn btn-block">Agregar al carrito</Button>
                            <ModalItem />
                            </div>
                    </div>
                </div>
                )
};