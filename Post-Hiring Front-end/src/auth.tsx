import React, { createContext } from "react";

export interface AuthContextInterface {
    authenticated?: boolean
    login?: (user: string, password: string) => void
    logout?: () => void
}

export const AuthContext = createContext<AuthContextInterface | null>(null)