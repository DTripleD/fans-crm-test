import { Navigate } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }: any) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
