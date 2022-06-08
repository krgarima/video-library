import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [logged, setLogged] = useState(false);

  return (
    <div>
      <AuthContext.Provider
        value={{
          userName,
          setUserName,
          password,
          setPassword,
          logged,
          setLogged,
          rememberPassword,
          setRememberPassword,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export { AuthContext, AuthContextProvider };
