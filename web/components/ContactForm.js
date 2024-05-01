import React, { useState, useEffect } from "react";
import styles from "./ContactForm.module.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    location: "",
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
        setFormState("success");

        setFormData({
          email: "",
          location: "",
          message: "",
        });

        setTimeout(() => {
          setFormState(false);
        }, 4200);
      } else {
        console.error("Form submission failed");
        setFormState("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
      setFormState("error");
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        {formState && (
          <div className={styles.message} data-message={formState}>
            <div>
              <div className={styles.icon}>
                <div className={styles.check}>
                  <svg
                    width="36"
                    height="25"
                    viewBox="0 0 36 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.68896 9.5711L13.6163 21.4984L33.689 1.42578"
                      stroke="white"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
                <div className={styles.x}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.07812 2L18.0781 18M34.0781 34L18.0781 18M18.0781 18L34.0781 2M18.0781 18L2.07813 34"
                      stroke="white"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>
              <h3>{formState}!</h3>
              <p>
                {formState == "success"
                  ? `Your message has been sent.`
                  : `There was an issue with sending, please try again.`}
              </p>
            </div>
          </div>
        )}
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
            value={formData.location}
            onChange={handleChange}
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
    </div>
  );
}

export default ContactForm;
