import { useState } from "react";

const AddNewUser = (props) => {
  // PROPS STATE
  const { addNew } = props;
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

  // HANDLE
  const handleUploadUserImage = async (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      // Convert File to Base64
      let base64Image = await toBase64(e.target.files[0]);
      let base64Final = base64Image.replace(/^data:image\/\w+;base64,/, "");
      setImage(base64Final);
    }
  };

  // handleAddNewUser
  const handleAddNewUser = (e) => {
    e.preventDefault();
    // Validate
    if (!userId || !username || !image) {
      alert("Invalid input");
      return;
    }

    // Add new user here
    let newUser = {
      id: userId,
      username: username,
      image: image,
    };
    addNew(newUser);
  };

  // toBase64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  // RENDER
  return (
    <>
      <form>
        <fieldset>
          <legend>Add New User</legend>

          {/* id */}
          <div>
            <label htmlFor="input-id">ID: </label>
            <input
              type="text"
              id="input-id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          {/* username */}
          <div>
            <label htmlFor="input-username">Username: </label>
            <input
              type="text"
              id="input-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* image */}
          <div>
            <label htmlFor="input-image">Image: </label>
            <input
              type="file"
              id="input-image"
              onChange={(e) => handleUploadUserImage(e)}
            />
          </div>

          {/* submit */}
          <div>
            <input
              type="submit"
              value="Save"
              onClick={(e) => handleAddNewUser(e)}
            />
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AddNewUser;
