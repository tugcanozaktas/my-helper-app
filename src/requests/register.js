import axios from "axios";

function RegisterUser(firstName, lastName, email, password, setMessage, setSuccess) {
  const url = "http://localhost:3001/register";
  const body = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    userTypeId: 2,
  };
  axios
    .post(url, body)
    .then((response) => {
      setSuccess(true)
      setMessage("User successfully registered!")
    })
    .catch((error) => {
      setSuccess(false)
      setMessage(error.response.data[0].message)
    });
}

export default RegisterUser;
