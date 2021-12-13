import { useContext, useState, createContext, useEffect } from 'react';
import { products } from '../data';
const myStorage = window.localStorage;

const DataContext = createContext();
const DataUpdateContext = createContext();
const CartContext = createContext();
const CartUpdateContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function useDataUpdate() {
  return useContext(DataUpdateContext);
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartUpdate() {
  return useContext(CartUpdateContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState(myStorage.cart ? JSON.parse(myStorage.cart) : []);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    myStorage.clear();
    myStorage.setItem('cart', JSON.stringify(data))
    console.log(JSON.parse(myStorage.cart))
  }, [data])

  function setDataContext(newData, method) {
    if (method === 'add')
      setData([...data, newData]);
    if (method === 'update') {
      const index = products.findIndex(item => item.id === newData);
      setData([ ...data, { ...products[index] } ]);
    }  
    if (method === 'remove') {
      const index = data.findIndex(item => item.id === newData);
      let dataCopy = [...data];
      dataCopy.splice(index, 1);
      setData([...dataCopy]);
    }
    if (method === 'clear') {
      setData([]);
    }
  }

  function setCartContext() {
    const reducedCart = data.reduce((currState, cartItem) => {
      const { id, title, price } = cartItem;
      const index = currState.findIndex(item => item.id === cartItem.id);
      if (currState[index] === undefined) {
        return [...currState, {
          id,
          quantity: 1,
          title,
          total: price
        }]
      } else {
        currState[index] = {
          ...currState[index],
          total: currState[index].total + price,
          quantity: currState[index].quantity + 1
        }
        return currState;
      }
    }, []);
    setCart(reducedCart);
  }

  return (
    <DataContext.Provider value={data}>
      <DataUpdateContext.Provider value={setDataContext}>
        <CartContext.Provider value={cart}>
          <CartUpdateContext.Provider value={setCartContext}>
            {children}
          </CartUpdateContext.Provider>
        </CartContext.Provider>
      </DataUpdateContext.Provider>
    </DataContext.Provider>
  )
}