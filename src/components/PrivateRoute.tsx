import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/user/userSelectors";

const PrivateRoute = ({ component: Component, redirectTo = "/" }: any) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(isLoggedIn);

  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
