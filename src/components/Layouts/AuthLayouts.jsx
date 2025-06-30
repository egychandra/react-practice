import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import Button from "../Elements/Button";

const AuthLayouts = (props) => {
  const { children, type, title, description } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-800"}`}>
      <div className="w-full max-w-xs">
        <Button
          classname="absolute top-5 right-5 bg-blue-700 rounded-md"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </Button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">
          {title}
        </h1>
        <p className="font-medium text-slate-500 mb-8">
          {description}
        </p>
        {children}
        <p className="text-center font-medium text-slate-500 mt-3">
          {type === "login" ? "Don't have an account? " : "Already have an account? "}
          {
            type === "login" ? (
              <Link className="text-blue-600" to="/register">
                Register
              </Link>
            ) : (
              <Link className="text-blue-600" to="/login">
                Login
              </Link>
            )
          }
        </p>
      </div>
    </div>
  )
}

export default AuthLayouts