import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label for="usernameLocal">Username</label>
      <input id="usernameLocal" type="text" />
      <label for="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add user</button>
    </form>
  );
};

export default AddUser;
