import React, { useState, createContext } from "react";
const Context = createContext();
function ContextProvider({ children }) {
  let [user, setUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    avatar: "",
    role: "",
  });
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [users, setUsers] = useState();
  const [iD, setID] = useState();
  const [editableData, setEditableData] = useState();

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        error,
        setError,
        errorMsg,
        setErrorMsg,
        imageSrc,
        setImageSrc,
        users,
        setUsers,
        iD,
        setID,
        editableData,
        setEditableData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
