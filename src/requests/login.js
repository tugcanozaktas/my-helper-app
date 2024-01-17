import axios from "axios"

function Login(userName, password, setAccessToken, setUserInfo, setMessage, setSuccess){
  const url = "http://localhost:3001/login";
  const body = {
    email: userName,
    password: password
  };
  axios
  .post(url, body)
  .then((response) => {
    setAccessToken(response.data.accessToken);
    setUserInfo(response.data.user);
  })
  .catch((error) => {
    setSuccess(false)
    setMessage(error.response.data)
  })
}

export default Login