// import { createContext, useContext, useEffect, useState } from "react";

// interface User {
//   id: string;
//   fullName: string;
//   email: string;
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   register: (data: { fullName: string; email: string; password: string }) => Promise<void>;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | null>(null);



// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   useEffect(() => {
//   const loadUser = async () => {
//     try {
//       const res = await fetch("/api/v1/users/me", {
//         credentials: "include",
//       });

//       if (!res.ok) {
//         setUser(null);
//         return;
//       }

//       const data = await res.json();
//       setUser(data.user);
//     } catch (err) {
//       setUser(null);
//     }
//   };

//   loadUser();
// }, []);


//   const login = async (email: string, password: string) => {
//     const res = await fetch("/api/v1/users/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ email, password }),
//     });

//     if (!res.ok) throw new Error("Login failed");

//     const data = await res.json();
//     setUser(data.user);
//   };

//   const register = async (data: { fullName: string; email: string; password: string }) => {
//     const res = await fetch("/api/v1/users/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify(data),
//     });

//     if (!res.ok) throw new Error("Signup failed");

//     const result = await res.json();
//     setUser(result.user);
//   };

//   const logout = async () => {
//     await fetch("/api/v1/users/logout", {
//       method: "POST",
//       credentials: "include",
//     });
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         login,
//         register,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
//   return ctx;
// };



import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api";

interface User {
  _id: string;
  fullName: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { fullName: string; email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // 🔁 Restore session on refresh
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await api.get("/users/me");
        setUser(res.data.data); // ✅ backend returns user inside `data`
      } catch {
        setUser(null);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post("/users/login", { email, password });
    setUser(res.data.data); // ✅ FIXED
  };

  const register = async (data: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    const res = await api.post("/users/register", data);
    setUser(res.data.data); // ✅ FIXED
  };

  const logout = async () => {
    await api.post("/users/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
