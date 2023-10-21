import pizzaData from "./data";
import Pizza from "./Pizza";

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Menu</h2>

      <ul className="pizzas">
        {pizzas.map((pizza) => {
          return <Pizza pizza={pizza} />;
        })}
      </ul>
    </main>
  );
}
export default Menu;
