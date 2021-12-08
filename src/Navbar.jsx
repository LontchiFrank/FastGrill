import React, { useState } from "react";
import User from "./User";
function Navbar() {
  const [users, setUsers] = useState([
    { name: "John", age: 20 },
    { name: "Mary", age: 22 },
    { name: "Sonia", age: 16 },
    { name: "Thelma", age: 18 },
  ]);
  const [head, setHead] = useState({ title: "Users List" });
  const decreaseAgeBy10 = () => {
    // setUsers([
    //   { name: "John", age: 10 },
    //   { name: "Mary", age: 12 },
    //   { name: "Sonia", age: 6 },
    //   { name: "Thelma", age: 8 },
    // ]);

    const newState = users.map((user) => {
      const tempuser = user;
      tempuser.age -= 10;
      return tempuser;
    });
    setUsers({ newState });
  };

  return (
    <div>
      <h1>{head.title}</h1>
      <button onClick={() => decreaseAgeBy10()}>
        {" "}
        Make me 10 year younger
      </button>
      <User age={users[0].age}>{users[0].name}</User>
      <User age={users[1].age}>{users[1].name}</User>
      <User age={users[2].age}>{users[2].name}</User>
      <User age={users[3].age}>{users[3].name}</User>
    </div>
  );
}

export default Navbar;
