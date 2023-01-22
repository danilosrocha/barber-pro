import { createContext, useState } from "react";
import { AuthContextData, AuthProviderProps, SignInProps, UserProps } from "./AuthContext.types";

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;


    async function signIn({ email, password }: SignInProps) {
        console.log({ email, password });
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;