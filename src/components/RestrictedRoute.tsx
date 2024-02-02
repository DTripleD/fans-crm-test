import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/user/userSelectors";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }: any) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
