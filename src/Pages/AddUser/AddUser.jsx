import React, { useContext } from "react";
import AsideBar from "../../Components/AsideBar/AsideBar.jsx";
import ErrorAlert from "../../Components/ErrorAlert/ErrorAlert.jsx";
import Header from "../../Components/Header/Header.jsx";
import Input from "../../Components/Input/Input.jsx";
import MainTitle from "../../Components/MainTitle/MainTitle.jsx";
import SelectImage from "../../Components/SelectImage/SelectImage.jsx";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Context } from "../../Context/Context.jsx";
import "./index.css";
const AddUser = () => {
  const navigate = useNavigate();

  const {
    user,
    setUser,
    setError,
    error,
    errorMsg,
    setErrorMsg,
    setImageSrc,
    imageSrc,
  } = useContext(Context);

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setUser({ ...user, role: value });
  };

  const regexUserName = /^[a-zA-Z]+$/;
  const regexRole = /^[a-zA-Z]+$/;
  const regexFirstName = /^[a-zA-Z]+$/;
  const regexlastName = /^[a-zA-Z]+$/;
  const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;

  const validateInputs = (e) => {
    if (!regexUserName.test(user.username)) {
      setError(true);
      setErrorMsg("unvalid username");
      return false;
    } else if (!regexFirstName.test(user.first_name)) {
      setError(true);
      setErrorMsg("unvalid first name");
      return false;
    } else if (!regexlastName.test(user.last_name)) {
      setError(true);
      setErrorMsg("unvalid lastname");
      return false;
    } else if (!regexEmail.test(user.email)) {
      setError(true);
      setErrorMsg("unvalid email");
      return false;
    } else if (!regexPassword.test(user.password)) {
      setError(true);
      setErrorMsg("unvalid password");
      return false;
    } else if (!regexRole.test(user.role)) {
      setError(true);
      setErrorMsg("unvalid role");
      return false;
    }
    return true;
  };

  const handlePost = async (e) => {
    // setUser({ ...user, avatar: imageSrc });
    let formdata = new FormData();

    for (let key in user) {
      formdata.append(key, user[key]);
    }
    if (validateInputs()) {
      axios({
        url: "https://test.helpmytoken.com/api/users",
        method: "POST",
        data: user,
      }).then((res) => {
        if (res.status === 200) {
          console.log("i get it finally", user);
          navigate("/edit");
        }
      });
    }
  };
  return (
    <section>
      <Header />
      <div className="container">
        <AsideBar />
        <article className="add-user-inputs">
          <MainTitle name={"new user details"} />
          <section className="inputs-holder">
            <div className="first-row row">
              <Input
                type="text"
                placeholder="Username"
                onBlur={(e) => {
                  setUser({ ...user, username: e.target.value });
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                onBlur={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="seconed-row row">
              <Input
                type="text"
                placeholder="First Name"
                onBlur={(e) => setUser({ ...user, first_name: e.target.value })}
              />
              <Input
                type="text"
                placeholder="Last Name"
                onBlur={(e) => setUser({ ...user, last_name: e.target.value })}
              />
            </div>
            <div className="third-row row">
              <Input
                type="email"
                placeholder="Email"
                onBlur={(e) => setUser({ ...user, email: e.target.value })}
              />
              <div className="radio-inputs">
                <div>
                  <Input
                    type="radio"
                    name="role"
                    id="Manager"
                    value="Manager"
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="Manager">Manager</label>
                </div>
                <div>
                  <Input
                    type="radio"
                    name="role"
                    id="Employee"
                    value="Employee"
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="Employee">Employee</label>
                </div>
              </div>
            </div>
          </section>
          <hr className="hr" />
          <div className="buttons-holder">
            <Input
              type="button"
              value="Add User"
              style={{
                backgroundColor: "#606060",
                border: "none",
                color: "white",
              }}
              onClick={(e) => {
                console.log(user);
                handlePost(e);
              }}
            />
            <Input
              type="button"
              value="Cancel"
              style={{
                backgroundColor: "#a7a7a7",
                border: "none",
                color: "#606060",
              }}
            />
          </div>
        </article>
        <article className="select-image-holder">
          <MainTitle name={"Select image"} />
          <SelectImage imageSrc={imageSrc} setImageSrc={setImageSrc} />
        </article>
      </div>

      <ErrorAlert error={error} setError={setError} errorMsg={errorMsg} />
    </section>
  );
};

export default AddUser;
