// // context/AuthContext.tsx
// import { createContext, useContext, useState, ReactNode } from 'react';

// type User = {
//   name: string;
//   email: string;
//   kelas: string;
//   quotes: string;
// };

// type AuthContextType = {
//   user: User | null;
//   login: () => void;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);

//   const login = () => {
//     setUser({
//       name: 'cherildedi',
//       email: 'cherildedi@gmail.com',
//       kelas: 'XI RPL 1',
//       quotes: 'iya',
//     });
//   };

//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth harus dipakai di dalam AuthProvider');
//   return context;
// };

import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  name: string;
  email: string;
  kelas: string;
  quotes: string;
};

type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({
      name: 'cherildedi',
      email: 'cherildedi@gmail.com',
      kelas: 'XI BC 4',
      quotes: 'iya',
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth harus dipakai di dalam AuthProvider');
  return context;
};