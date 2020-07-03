import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState(" ");
  const [isMouseOver, setMouseOver] = useState(false);
  const [fullName, setName] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    // const newName = event.target.value;
    // const inputName = event.target.name;

    const { value, name } = event.target;
    setName((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     email: prevValue.email,
      //     lName: prevValue.lName,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     email: prevValue.email,
      //     lName: value,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value,
      //   };
      // }
    });
  }

  function Heading(event) {
    setHeadingText(
      <div>
        <h1>
          {fullName.fName} {fullName.lName}
        </h1>
        <p>{fullName.email}</p>
      </div>
    );

    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      {headingText}
      <form onSubmit={handleChange}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your first Name?"
          name="fName"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your last Name?"
          name="lName"
          value={fullName.lName}
        />
        <input
          onChange={handleChange}
          type="email"
          placeholder="What's your email address?"
          name="email"
          value={fullName.email}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onClick={Heading}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
