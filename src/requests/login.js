import axios from "axios"

function Login(userName, password, setAccessToken, setUserInfo){
  const url = "http://localhost:3001/login";
  const body = {
    email: userName,
    password: password
  };
  axios
  .post(url, body)
  .then((response) => {
    console.log(response)
    setAccessToken(response.data.accessToken);
    setUserInfo(response.data.user);
  })
  .catch((error) => {
    console.error(error);
  })
}

export default Login