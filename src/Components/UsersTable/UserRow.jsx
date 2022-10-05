import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import "./index.css";
const UserRow = ({
  background,
  username,
  first_name,
  last_name,
  email,
  userId,
}) => {
  const navigate = useNavigate();
  const { users, setUsers, setId } = useContext(Context);
  const deleteUser = (id) => {
    console.log(id);
    setUsers(users.filter((user) => user.id !== id));
    axios.delete(`https://test.helpmytoken.com/api/users/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const editUser = (id) => {
    setId(id);
    navigate("/edit");
  };

  return (
    <div className={`table-row  ${background}`}>
      <p>{username}</p>
      <p>{first_name}</p>
      <p>{last_name}</p>
      <p>{email}</p>
      <p>
        <span>
          <FontAwesomeIcon
            icon={faTrash}
            color="#606060"
            onClick={() => {
              deleteUser(userId);
            }}
          />
        </span>
        <span>
          <FontAwesomeIcon icon={faEdit} color="#606060" onClick={()=>{
            editUser(userId)
          }}/>
        </span>
      </p>
    </div>
  );
};

export default UserRow;
