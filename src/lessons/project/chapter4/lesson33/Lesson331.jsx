import React, { useState } from "react";
import { useImmer } from "use-immer";

const Lesson331 = (props) => {
  // const [person, setPerson] = useState({
  //   username: "",
  //   email: "hohoaikiet@gmail.com",
  //   password: "",
  // });

  // const [person, setPerson] = useState({
  //   username: "",
  //   email: "hohoaikiet@gmail.com",
  //   password: "",
  //   address: {
  //     province: "Ha Noi",
  //     country: "Viet Nam",
  //   },
  // });

  const [person, setPerson] = useImmer({
    username: "",
    email: "hohoaikiet@gmail.com",
    password: "",
    address: {
      province: "Ha Noi",
      country: "Viet Nam",
    },
  });

  const handleOnChangeUsername = (event) => {
    setPerson({ ...person, username: event.target.value });
  };

  const handleSubmit = () => {
    console.log(">>> check data person: ", person);
  };

  const handleChangeInput = (event) => {
    setPerson({
      ...person,
      [event.target.name]: event.target.value,
    });
  };

  // handleOnChangeCountry
  const handleOnChangeCountry = (event) => {
    // Use Spread Method
    // setPerson({
    //   ...person,
    //   address: {
    //     ...person.address,
    //     [event.target.name]: event.target.value,
    //   },
    // });
    //
    // #2 Use useImmer Library
    setPerson((draft) => {
      // Modify state & draft is a state's clone
      draft.address.country = event.target.value;
    });
  };

  console.log("🚀CHECK  person =>", person);
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
      {/* country */}
      <div className="input-group">
        <label>Country</label>
        <input
          type={"text"}
          value={person.address.country}
          onChange={(event) => handleOnChangeCountry(event)}
          name="country"
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Lesson331;