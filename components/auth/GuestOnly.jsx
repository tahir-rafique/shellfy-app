import { useUser } from "./../../hooks/useUser";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import ThemeLoader from "../ThemeLoader";

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile");
    }
  }, [user, authChecked]);

  if (!authChecked || user) {
    return <ThemeLoader />;
  }

  return children;
};

export default GuestOnly;
