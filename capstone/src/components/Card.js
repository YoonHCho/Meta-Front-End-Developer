import "./Card.css";

const Card = ({ data }) => {
  console.log("CARD:", data);
  return (
    <>
      {/* <div className="card">
        <img className="card-img-top" src="" alt="foodimage" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div> */}
      <div className="card">
        <div className="imgBx" style={{ background: `url(${data.image}) no-repeat center / cover` }}></div>
        <div className="content">
          <span className="price">
            <span>{`${data.price}`}</span>
          </span>
          <div className="pd white">
            <h5>{data.name}</h5>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
