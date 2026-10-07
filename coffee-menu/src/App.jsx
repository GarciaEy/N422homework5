import { useState } from "react";
import "./App.css";
import { drinks } from "./drinks";
import Header from "./Header";
import DrinkCard from "./DrinkCard";
function App() {
  // const [count, setCount] = useState(0);
  const [order, setOrder] = useState([]);

  const addToOrder = (drink) => {
    setOrder([...order, drink]);
  };

  const total = order.reduce((sum, drink) => sum + drink.price, 0);

  return (
    <>
      <Header />
      <div className="drinkList">
        {drinks.map((drink) => (
          <DrinkCard
            key={drink.id}
            name={drink.name}
            description={drink.description}
            price={drink.price}
            addToOrder={() => addToOrder(drink)}
          />
        ))}
        <h2>your order</h2>

        {order.length === 0 ? (
          <p>No items in order</p>
        ) : (
          <>
            {order.map((drink) => (
              <div key={drink.id}>
                {drink.name} - ${drink.price.toFixed(2)}
              </div>
            ))}
            <p>Items in order: {order.length}</p>
            <p>OrderTotal: ${total.toFixed(2)}</p>

            <button onClick={() => setOrder([])}>Clear Order</button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
