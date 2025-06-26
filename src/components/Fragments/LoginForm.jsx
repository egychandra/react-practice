import InputForm from "../../components/Elements/Input";
import Button from "../../components/Elements/Button"

const LoginForm = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  }

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="email"
        name="email"
        placeholder="example@mail.com"
        label="Email"
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
    </form>
  )
}

export default LoginForm