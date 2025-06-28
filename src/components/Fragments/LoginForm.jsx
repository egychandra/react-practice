import { useState, useEffect, useRef } from "react"
import { login } from "../../services/auth.service"
import InputForm from "../../components/Elements/Input"
import Button from "../../components/Elements/Button"

const LoginForm = () => {
  const [loginError, setLoginError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const payload = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    login(payload, (status, response) => {
      if(status) {
        localStorage.setItem("token", response);
        window.location.href = "/products";
      } else {
        setLoginError(response);
      }
    });
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="text"
        name="username"
        placeholder="John Doe"
        label="Username"
        ref={usernameRef}
      />
      <InputForm
        type="password"
        name="password"
        placeholder="******"
        label="Password"
      />
      <Button
        classname="bg-blue-600 w-full"
        type="submit"
      >
        Login
      </Button>
      {loginError && <p className="text-red-500 text-center mt-3">{loginError}</p>}
    </form>
  )
}

export default LoginForm