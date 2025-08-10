import axios from "axios";
import { createContext, useEffect, useId, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/${userId}`)
      .then((res) => res.json())
      .then((responseData) => {
        setLoading(false);
        setUser(responseData.data);
      });
  }, [userId]);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
    }
  }, [userId]);

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
