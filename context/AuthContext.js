import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      setUser({ decodedToken });
    }
  }, []);

  const login = () => {
    localStorage.setItem("token", token);
    const decodedToken = jwt_decode(token);
    setUser({ decodedToken });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;


//logout implementation
/* 

const { logout } = useAuth();
const router = useRouter();

const handleLogout = () => {
  logout();
  router.push("/");  // or "/login"
};

  ); */