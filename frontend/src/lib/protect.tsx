import { useAuth } from "@/context/authContext";
import { ReactNode, useEffect } from "react";

const Protect = ({ children }: {children?: ReactNode}) => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  }, [isLoggedIn]);

  return <>{children}</>;
};

export default Protect;
