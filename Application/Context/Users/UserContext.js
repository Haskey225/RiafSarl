import React, { createContext, useState } from "react";
import { ActivityIndicator } from "react-native";


export const UserContext = createContext();

export function UserContextProvider(props) {

    const [isLoadded, setIsLoadded] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    const [test, setTest] = useState('second');

    return (
        <UserContext.Provider
            value={{ 
                isLogged, 
                isLoadded,
                setIsLogged
            }}
        >
            {isLoadded ? props.children : (<ActivityIndicator />)}
        </UserContext.Provider>
    )
}