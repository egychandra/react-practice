import InputForm from "../../components/Elements/Input";
import Button from "../../components/Elements/Button"

const RegisterForm = () => {
  return (
    <form action="">
      <InputForm
        type="text"
        name="username"
        placeholder="John Doe"
        label="Username"
      />
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
      <InputForm
        type="password"
        name="confirm-password"
        placeholder="******"
        label="Confirm Password"
      />
      <Button
        classname="bg-blue-600 w-full"
      >
        Register
      </Button>
    </form>
  )
}

export default RegisterForm