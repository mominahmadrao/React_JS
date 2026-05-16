import React, { useContext } from "react";
import UserContext from "../context/UserContext.js";

function Profile() {
// This line gives Login component access to setUser function from global context

  const { user } = useContext(UserContext);

  if (!user) return <h1> User not logged in </h1>;
  return (
    <div>
      Profile: {user.username}
      <h1> More components </h1>
    </div>
  );
}

export default Profile;
