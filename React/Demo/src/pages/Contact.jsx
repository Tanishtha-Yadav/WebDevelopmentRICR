import React from "react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setName(" ");
    setEmail(" ");
    setMessage(" ");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      setTimeout(() => {
        const data = {
          name,
          email,
          message,
        };
        console.log(data);
      }, 5000);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center p-2">Contact</div>
      <div className="m-2">
        <form onReset={handleClearForm} onSubmit={handleSubmit}>
          <div className="d-flex gap-1 p-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className=""
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your Name"
              id="name"
              required
            />
          </div>
          <div className="d-flex gap-1 p-2">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              className=""
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your Email"
              id="email"
              required
            />
          </div>
          <div className="d-flex gap-1 p-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className=""
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Enter your message"
              id="message"
              required
            ></textarea>
          </div>
          <div className="p-2">
            <button type="reset" className="m-2 btn btn-warning">
              Clear
            </button>
            <button type="submit" className="m-2 btn btn-success">
              {isLoading ? "Loading" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
