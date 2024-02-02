import { useDispatch } from "react-redux";
import { Button, Form, Input, Label, Title } from "./Auth.styled";
import { useState } from "react";
import { register } from "../redux/user/userSlice";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.length < 5 || password.length < 5 || name.length < 5) {
      return alert("Each field must contain at least 5 characters");
    }

    dispatch(register({ email, password, name }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Register</Title>
      <Label>
        Your name
        <Input
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
      </Label>
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
      <Button type="submit">Register</Button>
      <p>
        Have account? <Link to="/login">Login</Link>
      </p>
    </Form>
  );
};

export default RegisterPage;
