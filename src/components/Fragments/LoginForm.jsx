import InputForm from "../../components/Elements/Input";
import Button from "../../components/Elements/Button"

const LoginForm = () => {
  return (
    <form action="">
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
      >
        Login
      </Button>
    </form>
  )
}

export default LoginForm