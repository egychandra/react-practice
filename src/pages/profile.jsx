import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {
  const username = useLogin();

  return (
    <>
      <h2>Username: {username}</h2>
    </>
  )
}

export default ProfilePage