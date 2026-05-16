import React, { useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* Render whatever is inside UserContextProvider, children = Login + Profile */}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
