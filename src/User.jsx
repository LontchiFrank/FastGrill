import React from "react";

function User(props) {
  return (
    <div>
      Name: {props.children} | Age :{props.age}{" "}
    </div>
  );
}

export default User;
