import { useState } from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";

// state management
// create the context
// provide the context
// consume the context in child components

function App() {
  return (
    <UserContextProvider>
      <div>
        <h1>React video for context api</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
