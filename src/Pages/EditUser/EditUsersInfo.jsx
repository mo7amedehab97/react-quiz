import React, { useContext } from "react";
import AsideBar from "../../Components/AsideBar/AsideBar.jsx";
import Header from "../../Components/Header/Header.jsx";
import Input from "../../Components/Input/Input.jsx";
import MainTitle from "../../Components/MainTitle/MainTitle.jsx";
import SelectImage from "../../Components/SelectImage/SelectImage.jsx";
import { useNavigate } from "react-router-dom";
import "../AddUser/index.css";
import { Context } from "../../Context/Context.jsx";

const EditUsersInfo = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setUser({ ...user, role: value });
  };

  const handleEdit = (e)=>{

  }

  return (
    <div>
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
                value={user.username}
                onBlur={(e) => {
                  setUser({ ...user, username: e.target.value });
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                value={user.password}
                onBlur={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="seconed-row row">
              <Input
                type="text"
                placeholder="First Name"
                value={user.first_name}
                onBlur={(e) => setUser({ ...user, first_name: e.target.value })}
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={user.last_name}
                onBlur={(e) => setUser({ ...user, last_name: e.target.value })}
              />
            </div>
            <div className="third-row row">
              <Input
                type="email"
                placeholder="Email"
                value={user.email}
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
              value="Edit User"
              style={{
                backgroundColor: "#606060",
                border: "none",
                color: "white",
              }}
              onClick={(e) => {
                // console.log(user);
                handleEdit(e);
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
              onClick={() => navigate("/list")}
            />
          </div>
        </article>
        <article className="select-image-holder">
          <MainTitle name={"Select image"} />
          <SelectImage />
        </article>
      </div>
    </div>
  );
};

export default EditUsersInfo;
