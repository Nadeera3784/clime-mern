import React, {createContext, useReducer} from "react";

import AppReducer from './AppReducer';

export const AppContext = createContext();

const InitialState = {
    auth_status  : false,
    weather_reports : {}
} 

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
};
  
export default AppProvider;
  