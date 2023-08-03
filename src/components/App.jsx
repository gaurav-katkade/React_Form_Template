import React, { useState } from "react";
function App() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });
  function handleEvent(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form className="container">
        <h1>
          hello {contact.fname} {contact.lname}
        </h1>
        <p>{contact.email}</p>
        <input
          onChange={handleEvent}
          name="fname"
          type="text"
          placeholder="first name"
          value={contact.fname}
        />
        <input
          onChange={handleEvent}
          name="lname"
          type="text"
          placeholder="last name"
          value={contact.lname}
        />
        <input
          onChange={handleEvent}
          type="email"
          name="email"
          placeholder="email id"
          value={contact.email}
        />
      </form>
    </div>
  );
}
export default App;
