import "./Lesson26.scss";
import { useState } from "react";
import { useEffect } from "react";
import Homework26 from "./Homework26";
import AddNewUser from "./AddNewUser";
import { getUserWithPaginate } from "../../utils/apiService";

const Lesson26 = (props) => {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fetchUsersWithPaginate();
  }, []);

  const fetchUsersWithPaginate = async () => {
    let res = await getUserWithPaginate(1, 3);
    if (res && res.EC === 0) {
      setListUsers(res.DT.users);
    }
  };

  const addNew = (user) => {
    setListUsers([user, ...listUsers]);
  };

  return (
    <div>
      <p>Lesson 26: State is isolated and private</p>
      {/* AddNewUser */}
      <AddNewUser addNew={addNew} />

      {/* Homework26 */}
      <Homework26 listUsers={listUsers} />
    </div>
  );
};

export default Lesson26;
