import data from "../data";
import Card from "../components/Card";

const Menu = () => {
  return (
    <>
      <section className="container my-3">
        <h1>Our Menu</h1>
        <div className="my-5">
          <h2>Appetizers</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "appetizer" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>

        <div className="my-5">
          <h2>Main Dishes</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "main" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>

        <div className="my-5">
          <h2>Desserts</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "dessert" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
