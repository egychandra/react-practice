import AuthLayouts from "../components/Layouts/AuthLayouts"
import RegisterForm from "../components/Fragments/RegisterForm"

const RegisterPage = () => {
  return (
    <AuthLayouts
      type="register"
      title="Register"
      description="Please input your username, email, and password"
    >
      <RegisterForm />
    </AuthLayouts>
  )
}

export default RegisterPage