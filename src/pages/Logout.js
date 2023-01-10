import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import UserContext from "../UserContext";
import Swal from "sweetalert2";

export default function Logout() {
  const { setUser, unSetUser } = useContext(UserContext);
  unSetUser();
  useEffect(() => {
    setUser({ id: null, isAdmin: false });
  });

  Swal.fire({
    title: "Thank you for shopping!",
    icon: "info",
    text: "Please see us again!",
  });

  return <Navigate to="/login" />;
}
