import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
   
    if (userId) {
      axios
        .get(`http://localhost:5000/api/v1/user/${userId}`)
        .then((responseData) => {
          setUser(responseData.data.data);
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
