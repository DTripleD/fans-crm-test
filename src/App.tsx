import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppWrapper } from "./App.styled";
import RestrictedRoute from "./components/RestrictedRoute";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/user"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/user" />
            }
          />

          <Route
            path="/user"
            element={<PrivateRoute component={<UserPage />} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}

export default App;
