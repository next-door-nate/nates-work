import React, { useState, useEffect } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState(null);

  const [location, setLocation] = useState({
    city: "Pensicola",
    country: "USA",
    region: "Florida",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://666.n8.workers.dev/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setLocation({
          city: data.city,
          country: data.country,
          region: data.region,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      const response = await fetch("https://form-submissions.n8.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submission successful");
        // Handle success
      } else {
        console.error("Form submission failed");
        // Handle error
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email@example.com"
          required={true}
          id="email"
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>

        <input
          id="location"
          type="text"
          name="location"
          placeholder={
            `Example: ` + location.city + `, ` + location.region + `, ` + location.country
          }
          required={true}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required={true}
        />
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
