import { useState } from "react";
import { useImmer } from "use-immer";

const Lesson34 = (props) => {
  //   const [name, setName] = useState("Hồ Hoài Kiệt");
  const [name, setName] = useImmer("Hồ Hoài Kiệt");

  const [person, setPerson] = useState({
    name: "Hồ Hoài Kiệt",
    age: 25,
    education: {
      degree: "engineer",
      detail: {
        university: "hust",
        location: "Ha Noi",
      },
    },
  });

  const handleUpdateName = (e) => {
    //do sth
    setName(e.target.value);
    console.log("🚀CHECK  person =>", person);
    console.log("🚀CHECK  name =>", name);
  };

  return (
    <div>
      <div>Lesson34: Write concise update logic with Immer</div>
      <div>
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleUpdateName}>Update Name</button>
      </div>
    </div>
  );
};

export default Lesson34;