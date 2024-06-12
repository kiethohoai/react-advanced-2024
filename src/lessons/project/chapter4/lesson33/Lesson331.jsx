import React, { useState } from "react";

const Lesson331 = (props) => {
  // const [person, setPerson] = useState({
  //   username: "",
  //   email: "hohoaikiet@gmail.com",
  //   password: "",
  // });

  const [person, setPerson] = useState({
    username: "",
    email: "hohoaikiet@gmail.com",
    password: "",
    address: {
      province: "Ha Noi",
      country: "Viet Nam",
    },
  });

  const handleOnChangeUsername = (event) => {
    // person.username = event.target.value;
    //not merge
    setPerson({ ...person, username: event.target.value });
  };

  const handleSubmit = () => {
    console.log(">>> check data person: ", person);
  };

  const handleChangeInput = (event) => {
    //one event handler for all (using name attribute)
    //   console.log("🚀CHECK  event.target.name =>", event.target.name);
    setPerson({
      ...person,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div className="input-group">
        <label>Username</label>
        <input
          type={"text"}
          value={person.username}
          onChange={(event) => handleChangeInput(event)}
          name="username"
        />
      </div>
      <div className="input-group">
        <label>Email</label>
        <input
          type={"email"}
          value={person.email}
          name="email"
          onChange={(event) => handleChangeInput(event)}
        />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input
          type={"password"}
          value={person.password}
          name="password"
          onChange={(event) => handleChangeInput(event)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Lesson331;