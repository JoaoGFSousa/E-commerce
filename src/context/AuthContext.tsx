import { Notify } from "@/components/Notify";
import { login } from "@/services/login.service";
import { iAuthContext } from "@/types/contexts";
import { iSingin, iUser } from "@/types/userAccessValidatons";
import { useRouter } from "next/navigation";
import { resolve } from "path";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<iUser>({} as iUser);

  // vou criar um estado para saber se a pessoa esta logada ou não
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() =>{
    setIsLogged(JSON.parse(localStorage.getItem("isLogged") as string));
  }, []);

  const singIn = (values: iSingin) => {
    return new Promise((resolve) => {
      resolve(true);

      localStorage.setItem("isLogged", "true");

      const response = login(values);
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));

      setIsLogged(true);

      Notify("success", "Bem vindo a plataforma!");
      setTimeout(() => 
        router.push("/"), 4000
    );
    });
  };

  useEffect(() => {
    const userStroge = localStorage.getItem("user");
    if (userStroge) {
      setUser(JSON.parse(userStroge));
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setIsLogged(false);
    setUser({} as iUser);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ singIn, user, isLogged, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);