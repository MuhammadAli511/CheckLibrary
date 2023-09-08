import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { AUTH, LOGOUT, SET_THEME, UPDATE_PROFILE } from "../constants/actiontypes";

const initialState = {
    authData: {
        employee: {
            selectedTheme: 'light',
        }
    }
};

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { 
                ...state, 
                authData: {
                    token: action?.data?.token,
                    employee: action.data.employee
                }
            };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        case SET_THEME:
            return {
                ...state,
                authData: {
                    ...state.authData,
                    employee: {
                        ...state.authData.employee,
                        selectedTheme: action.payload,
                    }
                }
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                authData: {
                    ...state.authData,
                    employee: action.payload,
                }
            };
        default:
            return state;
    }
}

const settingTab = createSlice({
    name: 'settingTab',
    initialState: 'My Account',
    reducers: {
        setSettingTab: (state, action) => {
            return action.payload;
        }
    }
});

const tasksTab = createSlice({
    name: 'tasksTab',
    initialState: 'To-Do List',
    reducers: {
        setTasksTab: (state, action) => {
            return action.payload;
        }
    }
});

export const auth = (state) => state.auth;
export const { setSettingTab } = settingTab.actions;
export const { setTasksTab } = tasksTab.actions;

export const rootReducer = combineReducers({
    auth: authReducer,
    settingTab: settingTab.reducer,
    tasksTab: tasksTab.reducer,
});

