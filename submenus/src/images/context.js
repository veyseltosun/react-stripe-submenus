import React,{useState, useContext} from "react";
import sublinks from "./Data";
const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    return(
        <AppContext.Provider>

        </AppContext.Provider>
    )
};

export const useGlobalContext = () =>{
    return useContext(AppContext);

};

export {AppContext, AppProvider};
