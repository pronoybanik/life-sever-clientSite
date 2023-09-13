import { createContext, useEffect, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:5000/api/v1/user/${userId}`)
        .then((res) => res.json())
        .then((responseData) => {
          setUser(responseData.data);
        });
    }
    setLoading(false);
  }, []);

  const authInfo = {
    user,
    loading,
  };

  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
