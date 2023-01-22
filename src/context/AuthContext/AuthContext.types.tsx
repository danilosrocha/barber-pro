import { ReactNode } from "react"

export interface AuthContextData {
    user: UserProps,
    isAuthenticated: boolean,
    signIn: (credentials: SignInProps) => Promise<void>,
}

export interface UserProps {
    id: string,
    name: string,
    email: string,
    endereco: string | null,
    subscriptions: SubscriptionsProps
}

export interface SubscriptionsProps {
    id: string,
    status: string,
}

export type AuthProviderProps = {
    children: ReactNode
}

export interface SignInProps {
    email: string,
    password: string,
}