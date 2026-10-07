function DrinkCard({ name, description, price, addToOrder }) {
  return (
    <div className="drinkCard">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <button onClick={addToOrder}>Add to Order</button>
    </div>
  );
}

export default DrinkCard;
