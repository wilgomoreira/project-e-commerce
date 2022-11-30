import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function addItemCart(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            let carList = cart;

            carList[indexItem].amount = carList[indexItem].amount + 1;
            carList[indexItem].total = carList[indexItem].amount * carList[indexItem].price;

            setCart(carList);
            resultTotalCart(carList)

            return;
        }

        let data={
            ...newItem, 
            amount: 1, 
            total: newItem.price
        }

        setCart(myCart => [...myCart, data])
        resultTotalCart(cart)
    }

    function removeItemCart(product){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let carList = cart;

            carList[indexItem].amount = carList[indexItem].amount - 1;
            carList[indexItem].total = carList[indexItem].total - carList[indexItem].price;

            setCart(carList);
            resultTotalCart(carList);

            return;
        }

        const remainItems = cart.filter(item => item.id !== product.id)

        setCart(remainItems);
        resultTotalCart(remainItems);
    }

    function resultTotalCart(items){
        let result = items.reduce((acc, item) =>  {return acc + item.total }, 0)

        setTotal(result.toFixed(2))
    }

    return (
        <CartContext.Provider value={{cart, addItemCart, removeItemCart, total,}}>
            {children}
        </CartContext.Provider>
    )
}