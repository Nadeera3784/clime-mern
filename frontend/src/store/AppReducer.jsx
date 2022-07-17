import AppConstants from '@/constants/AppConstants';

const AppReducer = (state, action) => {
    switch (action.type) {
        case AppConstants.AUTH_SET_USER:
            return {
                ...state, 
                auth_status: action.payload
            };
        case AppConstants.GET_WEATHER_REPORTS:
            return {
                ...state, 
                weather_reports: action.payload
            };
        default:
            return state;
    }
};

export default AppReducer;