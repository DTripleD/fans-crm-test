import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/user/userSelectors";

interface PrivateRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

const PrivateRoute = ({
  component: Component,
  redirectTo = "/",
}: PrivateRouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
