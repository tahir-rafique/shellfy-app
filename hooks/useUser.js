import { useContext } from "react"; //  5.  use Context hook ka use kea

import { UserContext } from "../contexts/UserContext"; // 6. import User Context

export function useUser() {
  const context = useContext(UserContext); // 7.  context-hook ka use kea, ussy main UserContext pass kar dea , aur ek varialble main store karva dea,
  // this varibale will grab all the provider values automatically.

  if (!context) {
    throw new Error("useUser must be used within a userProvider ");
  }

  return context;
}
