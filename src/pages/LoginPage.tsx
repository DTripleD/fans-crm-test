import { useState } from "react";
import { Button, Form, Input, Label, Title } from "./Auth.styled";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/user/userSlice";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email.length < 5 || password.length < 5) {
      return alert("Each field must contain at least 5 characters");
    }

    dispatch(logIn({ email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Label>
        Email address
        <Input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Label>
      <Button type="submit">Login</Button>
      <p>
        First time? <Link to="/">Register</Link>
      </p>
    </Form>
  );
};

export default LoginPage;
