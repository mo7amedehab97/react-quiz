import React, { useContext } from "react";
import UserRow from "./UserRow";
import { Context } from "../../Context/Context";
import "./index.css";

const UsersTable = () => {
  const { users } = useContext(Context);
  return (
    <div className="users-table">
      {users?.map((user, i) => {
        return i % 2 === 0 ? (
          <UserRow
            username={user.username}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            background={"light"}
            userId={user.id}
            key={user.id}
          />
        ) : (
          <UserRow
            username={user.username}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            background={"dark"}
            userId={user.id}
            key={user.id}
          />
        );
      })}
    </div>
  );
};

export default UsersTable;
