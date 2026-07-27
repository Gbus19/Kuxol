import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import type { ReactNode } from "react";

import { me } from "../services/authService";
import type { UserDto } from "../services/authService";

export interface AuthUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    plan: string;
}

interface AuthContextType {
    user: AuthUser | null;
    login: (user: AuthUser) => void;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
    children,
}: {
    children: ReactNode;
}) {

    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadUser() {

            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {

                const response = await me();

                const currentUser: UserDto = response.user;

                setUser({
                    id: currentUser.id,
                    firstName: currentUser.firstName,
                    lastName: currentUser.lastName,
                    email: currentUser.email,
                    plan: currentUser.plan,
                });

            } catch {

                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");

                setUser(null);

            } finally {

                setLoading(false);

            }

        }

        loadUser();

    }, []);

    function login(user: AuthUser) {

        setUser(user);

    }

    function logout() {

        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");

        setUser(null);

    }

    return (

        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>

    );

}

export function useAuth() {

    const context = useContext(AuthContext);

    if (!context) {

        throw new Error(
            "useAuth debe utilizarse dentro de AuthProvider."
        );

    }

    return context;

}