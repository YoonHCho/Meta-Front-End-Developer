import Card from "./Card";

const Special = ({ data }) => {
  console.log("SPECIAL", data[0].name);
  return (
    <section id="special" className="container mb-3">
      <h4>This Week Specials!</h4>
      <div id="special-body">
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
          // return (
          //   <>
          //     <h4>{element.name}</h4>
          //     <h5>{element.price}</h5>
          //     <img src={element.image} alt={`${element.name}`}></img>
          //     <p>{element.description}</p>
          //   </>
          // );
        })}
      </div>
    </section>
  );
};

export default Special;
