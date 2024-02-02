import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/user/userSelectors";

interface RestrictedRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: RestrictedRouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
