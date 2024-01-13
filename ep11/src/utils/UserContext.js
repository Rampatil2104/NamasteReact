import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Welcome Ram!",
});

export default UserContext;
