import { createContext, useState, ReactNode } from "react";

export type UserContextType = {
    username: string;
    changeUsername: (username: string) => void;
}

export const UserContext = createContext<UserContextType>({
    username: "",
    changeUsername: () => { }
});

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
    const [username, setUsername] = useState("");

    const changeUsername = (newUsername: string) => {
        setUsername(newUsername);
    };

    return (
        <UserContext.Provider value={{ username, changeUsername }}>
            {children}
        </UserContext.Provider>
    );
};