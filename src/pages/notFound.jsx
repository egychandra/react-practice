import { useRouteError } from "react-router-dom"

const NotFoundPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="font-medium text-slate-500 my-3">
        Sorry, an unexpected error has occured.
      </p>
      <p className="font-medium text-slate-500">
        {error.statusText || error.message}
      </p>
    </div>
  )

}

export default NotFoundPage