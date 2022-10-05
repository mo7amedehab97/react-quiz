import React, { useState, useContext, useEffect } from "react";
import AsideBar from "../../Components/AsideBar/AsideBar";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import axios from "axios";
import { Context } from "../../Context/Context";
import "./index.css";
import UsersTable from "../../Components/UsersTable/UsersTable";
const ListOfUsers = () => {
  const { setUsers, users } = useContext(Context);
  const [searchQueries, setSearchQueries] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        "https://test.helpmytoken.com/api/users"
      );
      setUsers(data.payload);
    };
    getUsers();
  }, [setUsers]);

  const handlesearch = () => {
    if (
      searchQueries.firstName ||
      searchQueries.lastName ||
      searchQueries.email
    ) {
      const filtered = users.filter((user) => {
        return (
          user.first_name
            .toLowerCase()
            .includes(searchQueries.firstName.toLowerCase()) &&
          user.last_name
            .toLowerCase()
            .includes(searchQueries.lastName.toLowerCase()) &&
          user.email.toLowerCase().includes(searchQueries.email.toLowerCase())
        );
      });
      setUsers(filtered);
    } else {
      const getUsers = async () => {
        const { data } = await axios.get(
          "https://test.helpmytoken.com/api/users"
        );
        setUsers(data.payload);
      };
      getUsers();
    }
  };
  const handleOnChange = (e) => {
    setSearchQueries({
      ...searchQueries,
      [e.target.name]: e.target.value,
    });

    return handlesearch();
  };

  return (
    <section>
      {" "}
      <Header />
      <article className="container">
        <AsideBar />
        <div className="list-page-title">
          <h1 className="main-title">Search</h1>
          <div className="search-inputs">
            <Input
              name="firstName"
              type="text"
              onChange={(e) => handleOnChange(e)}
              placeholder="First Name"
              requierdoption="required"
            />
            <Input
              name="lastName"
              type="text"
              onChange={(e) => handleOnChange(e)}
              placeholder="Last Name"
              requierdoption="required"
            />
            <Input
              name="email"
              type="email"
              onChange={(e) => handleOnChange(e)}
              placeholder="Email"
              requierdoption="required"
            />
          </div>
          <div className="list-users">
            <h1 className="main-title">Users</h1>
            {<UsersTable />}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ListOfUsers;
