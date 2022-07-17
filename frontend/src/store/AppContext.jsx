import React, {createContext, useReducer} from "react";

import AppReducer from '@/store/AppReducer';
import AuthService from '@/services/Auth';
import AppConstants from '@/constants/AppConstants';

export const AppContext = createContext();

const { getToken } = AuthService();

const InitialState = {
    auth_status  : (getToken(AppConstants.AUTH_TOKEN)) ? true : false,
    weather_reports : []
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
  