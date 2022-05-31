import { createContext, useState, useEffect } from 'react'
import Respiracion from "../data/files/respiracion.jpg"
import Mudras from "../data/files/mudras.jpg"
import Uttanasana from "../data/files/uttanasana.jpg"
import Fortaleza from "../data/files/fortaleza.jpg"

export const Context = createContext({})

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const [item, setItem] = useState([
    {
      id: "1",
      title: "Curso de respiración diafrágmatica", 
      description: "Conocé como controlar tu respiración para lograr una mejor conexión con el entorno", 
      image: Respiracion, 
      fullDescription: "La respiración diafragmática es un tipo de respiración relajante que usa el diafragma. El diafragma es el músculo que se encuentra debajo de las costillas y arriba del estómago. Con este tipo de respiración, el diafragma ocasiona que el estómago, en vez del pecho, suba y baje. Cuando los pulmones se llenan de aire el diafragma presiona hacia abajo y el estómago sube (se mueve hacia adelante). Cuando los pulmones se vacían de aire el diafragma vuelve a subir y el estómago baja (se mueve hacia adentro). El resultado es una respiración lenta, uniforme y profunda.",
      stock: 10,
      price: 1500
  },
  {
      id: "2",
      title: "Mudras y sus significados", 
      description: "¿Cuál es la implicacia de los distintos Mudras? Reconocelos con esta guía",
      image: Mudras, 
      fullDescription: "Mudra significa sello, gesto o marca. Se trata de gestos simbólicos que se hacen con las manos o los dedos durante la práctica del yoga o la meditación para facilitar la concentración y el flujo de energía. Como dice la conocida profesora de yoga Xuan-Lan en su libro 'Yoga para mi bienestar', los mudras son el yoga de las manos, y se activan a través de las uniones, flexiones o pliegues de los dedos y de las palmas",
      stock: 10,
      price: 3500
  },
  {
      id: "3",
      title: "Tutorial de Uttanasana", 
      description: "Uttanasana es una flexión hacia delante de pie con las piernas juntas. ¿Conoces el truco de la respiración para hacerla correctamente?", 
      image: Uttanasana, 
      fullDescription: "La Uttanasana es una asana de Yoga que consiste en realizar una flexión hacia delante con las piernas estiradas y juntas, estando de pie, desde Tadasana. En esto se diferencia de la Paschimottanasana o Pinza Sentada, que se realiza desde la Dandasana. Y se diferencia de la Prasarita Padottanasana en que esta última se realiza con las piernas bien abiertas. La Uttanasana es una postura de Yoga que se puede hacer entre otras posturas de pie, o como postura en sí misma.",
      stock: 10,
      price: 1000
  },
  {
      id: "4",
      title: "Práctica para desarrollar fortaleza y resistencia", 
      description: "Mejorar tu físico es fundamental para una mejor compresión y conexión, enterate como hacerlo", 
      image: Fortaleza, 
      fullDescription: "El yoga te va a ayudar a ponerte más fuerte. Sin embargo tienes que saber que la fuerza que vas a desarrollar está directamente relacionada con la práctica o tipo de yoga que vayas a hacer. Así que ten claro cuales son tus objetivos físicos antes de elegir qué tipo de yoga vas a practicar para que esté acorde a tus objetivos.",
      stock: 10,
      price: 5600,
  }
  ]);

  const [itemsTotal, setItemsTotal] = useState ()

  const [totalDeCompra, setTotalDeCompra] = useState()

  useEffect(() => {
    if (!localStorage.getItem("cartLocalS")) {
      localStorage.setItem("cartLocalS", JSON.stringify([]));
    } else {
      setCart(JSON.parse(localStorage.getItem("cartLocalS")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartLocalS', JSON.stringify(cart))
    const myCart = JSON.parse(localStorage.getItem('cartLocalS'));    
    const totalItemsCart = myCart.reduce((ant, items) => { return ant + items.quantity}, 0);  
    setItemsTotal(JSON.stringify(totalItemsCart)); 
    
    let resultado = myCart.reduce((ant, items) => { return ant + items.price*items.quantity}, 0)
    setTotalDeCompra(resultado.toString())
  
  }, [cart,itemsTotal,totalDeCompra]);

  
  const isInCart = (id) => cart.some((item) => item.id === id);

  const addItemToCart = (itemObtenido,quantity) => {
    if (isInCart(itemObtenido.id)) {
      const newCart = cart.map((cartObtenido) => {
        if (cartObtenido.id === itemObtenido.id) {
          return { ...cartObtenido, quantity: quantity}
          
        }else return cartObtenido
      })
      setCart(newCart);

    }else {
      setCart((prev) =>[...prev, { ...itemObtenido,quantity }]);

    }
  }

  const removeItem = (e) => {
  
    const newCartRemove = cart.filter((item) => item.id !== e.target.id);
    setCart(newCartRemove);
  }

  const vaciarCart=()=> setCart([])
  
  return(
    <Context.Provider
      value={{
        addItemToCart,
        cart,
        removeItem,
        itemsTotal,
        totalDeCompra,
        vaciarCart
      }}>
      {children}
    </Context.Provider>
    )
}