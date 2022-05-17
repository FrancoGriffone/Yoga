import React from "react";
import Button from 'react-bootstrap/Button';

export const Item = ({ item }) => {
        return (
                <div className="card" style={{ margin: "15rem" }}>
                    <div className="card-body">
                        {/* <img>{}</img> */}
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                            <div className="d-grid">
                            <Button className="btn btn-block">Agregar al carrito</Button>
                            </div>
                    </div>
                </div>
                )
};