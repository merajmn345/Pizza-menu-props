function Pizza(props) {
  console.log(props.pizza.soldOut);

  if (props.pizza.soldOut) {
  }
  return (
    <li className={`pizza ${props.pizza.soldOut ? "sold-out" : null}`}>
      <img src={props.pizza.photoName} alt="pizza" />
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        <span>{props.pizza.soldOut ? "SOLD OUT" : props.pizza.price}</span>
      </div>
    </li>
  );
}
export default Pizza;
