import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form className={classes.input} onSubmit={addUserHandler}>
        <label for="usernameLocal">Username</label>
        <input id="usernameLocal" type="text" />
        <label for="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
