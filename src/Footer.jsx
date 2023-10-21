import Button from "./Button";

function Footer() {
  const openHour = "11";
  const closeHour = "21";
  const hour = new Date().getHours();

  let isOpen = hour >= openHour && hour <= closeHour;

  console.log(openHour, hour, closeHour, isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            you'r most welcome to {openHour}:00 to {closeHour}:00
          </p>
          {/* <button className="btn">Order</button> */}
          <Button title={isOpen ? "Order" : "closed"} />
        </div>
      ) : (
        <p>Closed</p>
      )}
    </footer>
  );
}
export default Footer;
