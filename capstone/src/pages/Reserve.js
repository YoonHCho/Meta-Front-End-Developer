import { useState } from "react";
import ConfirmRes from "./ConfirmRes";

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Reserve = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [msg, setMsg] = useState({
    line1: "",
    line2: "",
    line3: "",
  });

  const isGood = () => {
    return name.firstName && name.lastName && validateEmail(name.email) && date && time && guests && occasion;
  };

  const handleName = e => {
    if (e.target.name === "firstName") {
      setName({ ...name, firstName: e.target.value });
    } else if (e.target.name === "lastName") {
      setName({ ...name, lastName: e.target.value });
    } else if (e.target.name === "email") {
      setName({ ...name, email: e.target.value });
    }
  };

  const handleDate = e => {
    setDate(e.target.value);
  };

  const handleTime = e => {
    setTime(e.target.value);
  };

  const handleGuests = e => {
    const num = Number(e.target.value);
    if (num < 0) {
      setGuests(0);
    } else if (num > 84) {
      setGuests(84);
    } else {
      setGuests(num);
    }
  };

  const handleOccasion = e => {
    setOccasion(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMsg({
      ...msg,
      line1: `Dear ${name.firstName} ${name.lastName}:`,
      line2: `Your table for party of ${guests} is reserved for ${date} at ${time}.`,
      line3: `We will see you soon for the ${occasion} event!`,
    });
    setConfirm(true);
  };

  return (
    <>
      {!confirm ? (
        <section className="container my-3" style={{ maxWidth: "970px" }}>
          <h2>Reserve a table</h2>
          <form onSubmit={handleSubmit} className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
                className="form-control"
                value={name.firstName}
                onChange={handleName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                className="form-control"
                value={name.lastName}
                onChange={handleName}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="jdoe@jdoe.com"
                className="form-control"
                value={name.email}
                onChange={handleName}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input type="date" name="form-control" id="date" className="form-control" value={date} onChange={handleDate} />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="date" className="form-label">
                Time
              </label>
              <select name="date" id="date" className="form-select" value={time} onChange={handleTime}>
                <option defaultValue hidden>
                  Select Time
                </option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="4:30 PM">4:30 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="5:30 PM">5:30 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="6:30 PM">6:30 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="7:30 PM">7:30 PM</option>
                <option value="8:00 PM">8:00 PM</option>
                <option value="8:30 PM">8:30 PM</option>
                <option value="9:00 PM">9:00 PM</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="guests" className="form-label">
                Guests
              </label>
              <input
                value={guests}
                type="number"
                name="form-control"
                id="guests"
                className="form-control"
                min={0}
                max={84}
                onChange={handleGuests}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="date" className="form-label">
                Occasion
              </label>
              <select name="date" id="date" className="form-select" value={occasion} onChange={handleOccasion}>
                <option defaultValue hidden>
                  Select Occasion
                </option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" className="col-md-6 btn btn-primary my-4" style={{ maxWidth: "440px" }} disabled={!isGood()}>
              Confirm Reservation
            </button>
          </form>
        </section>
      ) : (
        <ConfirmRes conf={msg} />
      )}
    </>
  );
};

export default Reserve;
