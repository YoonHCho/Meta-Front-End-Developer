const ConfirmRes = ({ conf }) => {
  const render = conf;
  return (
    <>
      <section className="container my-3">
        <h2>Reservation Confirmed</h2>
        <div className="container row pd my-3" style={{ width: "60%", margin: "0 auto", background: "#F4CE14", borderRadius: "15px" }}>
          <h6>{`${render.line1}`}</h6>
          <h6>{`${render.line2}`}</h6>
          <h6>{`${render.line3}`}</h6>
        </div>
      </section>
    </>
  );
};

ConfirmRes.propTypes = {};

export default ConfirmRes;
