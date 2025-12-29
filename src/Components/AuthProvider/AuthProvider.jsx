import axiosInstance from "../../utils/axiosInterceptor";
import { createContext, useEffect, useState, useRef } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);

  // Fetch user data only once on mount
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("Token");

      if (!userId || !token) {
        setLoading(false);
        setUser(null);
        return;
      }

      try {
        const parsedUserId = JSON.parse(userId);
        const parsedToken = JSON.parse(token);

        const response = await axiosInstance.get(
          `/api/v1/user/${parsedUserId}`,
          {
            headers: {
              Authorization: `Bearer ${parsedToken}`,
            },
          }
        );

        if (response.data.status === "success") {
          setUser(response.data.data);
          setError(null);
        } else {
          throw new Error(response.data.message || "Failed to fetch user");
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        setError(err.message);
        // Clear invalid credentials without triggering re-render loop
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("userId");
          localStorage.removeItem("Token");
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post(
        `/api/v1/user/login`,
        { email, password }
      );

      if (response.data.status === "success") {
        const { user: userData, token } = response.data.data;
        localStorage.setItem("userId", JSON.stringify(userData._id));
        localStorage.setItem("Token", JSON.stringify(token));
        setUser(userData);
        return { success: true, message: response.data.message };
      } else {
        throw new Error(response.data.message || "Login failed");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "Login failed";
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("userId");
    setUser(null);
    setError(null);
  };

  // Refetch user function
  const refetchUser = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("Token");
    if (!userId || !token) return;

    try {
      const parsedUserId = JSON.parse(userId);
      const parsedToken = JSON.parse(token);
      const response = await axiosInstance.get(
        `/api/v1/user/${parsedUserId}`,
        { headers: { Authorization: `Bearer ${parsedToken}` } }
      );
      if (response.data.status === "success") {
        setUser(response.data.data);
      }
    } catch (err) {
      console.error("Error refetching user:", err);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = !!user;

  const authInfo = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated,
    refetchUser,
  };

  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
