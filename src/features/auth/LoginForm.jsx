import { useState } from "react";
import LoginInput from "../../components/LoginInput";
import LoginButton from "./LoginButton";
import { useAuth } from "../../hooks/use-auth";

export default function LoginForm() {
  const [input, setInput] = useState({
    emailOrMobile: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input);
  };

  return (
    <form className="grid" onSubmit={handleSubmitForm}>
      <LoginInput
        placeholder="Email address or phone number"
        value={input.emailOrMobile}
        onChange={(e) => setInput({ ...input, emailOrMobile: e.target.value })}
      />
      <LoginInput
        type="password"
        placeholder="password"
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />
      <LoginButton />
    </form>
  );
}
