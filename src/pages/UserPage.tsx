import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../redux/user/userSelectors";
import { logOut } from "../redux/user/userSlice";

const UserPage = () => {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Hello, {user.email}!</h2>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};

export default UserPage;
