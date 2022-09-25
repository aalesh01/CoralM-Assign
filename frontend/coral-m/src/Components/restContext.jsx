import { useEffect } from "react";
import React from "react";

export const RestContext = React.createContext();

const RestContextBox = ({ children }) => {

    const [restaurants, setRestuarants] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(response => setRestuarants(response));
    }, []);

    return (
        <RestContext.Provider value={{ restaurants }}>
        {children}
        </RestContext.Provider>
    );
    }

    export default RestContextBox;