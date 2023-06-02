import "./Testimonials.css";
import TestimonialsCard from "./TestimonialsCard";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=4");
      const data = await response.json();
      setUsers(data.results);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="testimonial container py-3 my-3">
      <h2>Testimonials from our guests!</h2>
      <div className="row justify-content-center align-items-center pd">
        {users.map((person, index) => {
          return <TestimonialsCard key={index} data={person} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
