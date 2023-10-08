import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { AUTH_LOGIN, AUTH_SIGNUP, LOGOUT, SET_THEME, UPDATE_PROFILE, UPDATE_WORKSPACE } from "../constants/actiontypes";

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH_SIGNUP:
            localStorage.setItem("profile", action?.data?.token ?? "");
            return { 
                ...state, 
                authData: {
                    token: action?.data?.token,
                    user: action.data.user
                }
            };
        case AUTH_LOGIN:
            localStorage.setItem("profile", action?.data?.token ?? "");
            return { 
                ...state, 
                authData: {
                    token: action?.data?.token,
                    user: action.data.user,
                    workspace: action.data.workspace
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
                    workspace: {
                        ...state.authData.workspace,
                        selectedTheme: action.payload
                    }
                }
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                authData: {
                    ...state.authData,
                    user: action.payload.user
                }
            };
        case UPDATE_WORKSPACE:
            return {
                ...state,
                authData: {
                    ...state.authData,
                    workspace: action.payload
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

const projectsTab = createSlice({
    name: 'projectsTab',
    initialState: 'List View',
    reducers: {
        setProjectsTab: (state, action) => {
            return action.payload;
        }
    }
});

export const auth = (state) => state.auth;
export const { setSettingTab } = settingTab.actions;
export const { setTasksTab } = tasksTab.actions;
export const { setProjectsTab } = projectsTab.actions;

export const rootReducer = combineReducers({
    auth: authReducer,
    settingTab: settingTab.reducer,
    tasksTab: tasksTab.reducer,
    projectsTab: projectsTab.reducer
});

