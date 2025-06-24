import AuthLayouts from "../components/Layouts/AuthLayouts"
import LoginForm from "../components/Fragments/LoginForm"

const LoginPage = () => {
  return (
    <AuthLayouts
      type="login"
      title="Login"
      description="Please input your email, and password"
    >
      <LoginForm />
    </AuthLayouts>
  )
}

export default LoginPage